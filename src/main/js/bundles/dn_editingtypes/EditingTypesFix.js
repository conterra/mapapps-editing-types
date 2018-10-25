/*
 * Copyright (C) 2017 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "dojo/_base/lang",
    "ct/array",
    "ct/_when",
    "ct/store/Domains"
], function (declare,
             d_array,
             d_lang,
             ct_array,
             ct_when,
             Domains) {
    return declare([], {
        activate: function () {
            this.inherited(arguments);
            this._attributeEditingWidgetResolver._resolveDataformJson = this._resolveDataformJson;
            this._featureEditingController._onAttributeEditorApply = this._onAttributeEditorApply;
            this._featureEditingController._esriMap = this._esriMap;
        },
        _onAttributeEditorApply: function (evt) {
            var currentEditOptions = this._currentEditOptions;
            if (!currentEditOptions) {
                return;
            }
            var context = {
                graphic: evt.graphic,
                editInfo: evt.editInfo
            };
            if (currentEditOptions.isCreate) {
                context.isCreate = true;
            } else {
                context.isUpdate = true;
            }
            context.unmodifiedGraphic = this._orgGraphic;
            return ct_when(this._process(context), function (r) {
                var layerIds = this.esriMap.graphicsLayerIds;
                if (layerIds && layerIds.length) {
                    d_array.forEach(layerIds, d_lang.hitch(this, function (layerId) {
                        var layer = this.esriMap.getLayer(layerId);
                        if (layer && layer.refresh) {
                            layer.refresh();
                        }
                    }));
                }
                if (currentEditOptions.isCreateTool) {
                    this._reactivateDrawFeatureAfterAttributeEditing(true);
                }
                this._orgGraphic = this._cloneGraphic(context.graphic);
            }, function (e) {
                return;
            }, this);
        },
        _resolveDataformJson: function (opts) {
            var graphic = opts.graphic;
            var attributes = graphic.attributes;
            var editInfo = opts.editInfo;
            var esriLayer = editInfo.esriLayer;
            var mapmodelNodeId = editInfo.mapModelNode.get("id");
            var isEditable = editInfo.canUpdate;
            var metadata = {
                fields: esriLayer.fields,
                types: esriLayer.types,
                typeIdField: esriLayer.typeIdField
            };
            var fields = Domains(metadata).mergeDomainsIntoFields(attributes);
            var typeIdField = ct_array.arraySearchFirst(fields, {
                name: esriLayer.typeIdField
            });
            if (typeIdField)
                typeIdField.editable = true;
            return this.dataformMapper.createDataformFrom(mapmodelNodeId, fields, isEditable);
        },
        deactivate: function () {
        }
    });
});
		