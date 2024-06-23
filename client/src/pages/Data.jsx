import React from "react";
import image8 from '../pages/generalinformation/image/image8.png';
const Data = () =>{
return(
<>
<div className="heading">
<h1>Technical Data Management System</h1>
<p>The data are contained in 'records' of various forms, such as on paper, microfilms or digital media. Hence technical data management is also concerned with record management involving technical data. Technical document management systems are used within large organisations with large scale projects involving engineering. For example, a TDMS can be used for</p>
</div>
<div className="container-4">
<section className="about">
<div className="about-image">
<img src={image8} alt="logo" />
</div>
<div className="about-content">
<h2>Data Planning</h2>
<p>Data plans (long-term or short-term) are constructed as the first essential step of a proper and complete TDMS. It is created to ultimately help with the 3 other constituents, data acquisition, data management and data sharing. A proper data plan should not exceed 2 pages and should address the following basics</p>
<h2>Data Management</h2>
<p>After data acquisition, data is sorted out, whilst useful data is archived, unwanted data is disposed. When managing and archiving data, the features below of the data are considered.</p>
<h2>Data Sharing</h2>
<p>Archived and managed data are accessible to rightful entities. A proper and complete TDMS should share data to a suitable extent, under suitable security, in order to achieve optimal usage of data within the organisation. It aims for easy access when reused by other researchers and hence it enhances </p>
</div>
</section>
</div>
</>
)
}

export default Data;