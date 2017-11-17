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
define({
    service: {
        aerial: "Luftbild",
        grey: "Graustufen",
        topo: "Topographie"
    },
    custominfo: {
        title: "Information",
        content: "Dieses Bundle erlaubt es Ihnen Feature Types im map.apps Core Bundle Editing zu editieren. Normalerweise k\u00f6nnen Attribute, die gleichzeitig als Type ID Feld im ArcGIS Server eingetragen sind nicht editiert werden, da sich mit der \u00c4nderung ebenso andere Parameter \u00e4ndern k\u00f6nnten. Diese Funktion w\u00fcrde allerdings in map.apps nicht korrekt abgebildet. Aus diesem Grund ist das Bundle nur zu verwenden, wenn lediglich die Visualisierung von Features ge\u00e4ndert werden soll. Verwenden Sie es mit vorsicht, wenn sie Subtypes in Ihrer App einsetzen."
    }
});
