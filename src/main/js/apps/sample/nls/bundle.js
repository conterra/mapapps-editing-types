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
    root: {
        service: {
            aerial: "Aerial View",
            grey: "Grey",
            topo: "Topography"
        },
        custominfo: {
            title: "Information",
            content: "This bundle allows you to edit feature types together with the map.apps core editing bundle. Normally, editing attributes that are used as type ID fields in ArcGIS Server are not available for editing, because attribute domains or other parameters might change with different types and this would not be reflected correctly in map.apps. This bundle is intended to be used, if types are only used for visualization of features. Use it with caution when using subtypes in your data."
        }
    },
    de: true
});
