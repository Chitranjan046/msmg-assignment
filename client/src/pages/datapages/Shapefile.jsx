import React from "react";
const  Shapefile = () =>{
return(
<>
<div className="heading">
<h1>Shapefile</h1>
<p>The shapefile format is a geospatial vector data format for geographic information system (GIS) software. It is developed and regulated by Esri as a mostly open specification for data interoperability among Esri and other GIS software products. The shapefile format can spatially describe vector features: points, lines, and polygons, representing, for example, water wells, rivers, and lakes. Each item usually has attributes that describe it, such as name or temperature.
Overview</p>
</div>
<div className="container-4">
<section className="about">
<div className="about-content">
<h2>Overview</h2>
<p>The shapefile format is a digital vector storage format for storing geographic location and associated attribute information. This format lacks the capacity to store topological information. The shapefile format was introduced with ArcView GIS version 2 in the early 1990s. It is now possible to read and write geographical datasets using the shapefile format with a wide variety of software.</p>
<h2>Spatial representation</h2>
<p>The edges of a polyline or polygon are composed of points. The spacing of the points implicitly determines the scale at which the feature is useful visually. Exceeding that scale results in jagged representation. Additional points would be required to achieve smooth shapes at greater scales. For features better represented by smooth curves, the polygon representation requires much more data storage than, for example, splines, which can capture smoothly varying shapes efficiently. None of the shapefile format types supports splines.</p>
<h2>Shapefile attribute format </h2>
<p>This file stores the attributes for each shape; it uses the dBase IV format. The format is public knowledge, and has been implemented in many dBase clones known as xBase. The open-source shapefile C library, for example, calls its format "xBase" even though it's plain dBase.</p>
</div>
</section>
</div>
</>
)
}
export default Shapefile;