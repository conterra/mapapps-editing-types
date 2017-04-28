# Editing Types Bundle
This bundle allows you to edit feature types together with the map.apps core editing bundle. Normally, editing attributes that are used as type ID fields in ArcGIS Server are not available for editing, because attribute domains or other parameters might change with different types and this would not be reflected correctly in map.apps. **This bundle is intended to be used, if types are only used for visualization of features. Use it with caution when using subtypes in your data.**

Sample App
------------------
https://www.mapapps.de/mapapps/resources/apps/downloads_editing_types 

Installation Guide
------------------
In order to use the "dn_editingtypes" bundle, simply add it to your app - no further configuration is required.

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`

