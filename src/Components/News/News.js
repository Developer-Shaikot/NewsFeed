import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
const News = (props) => {
    const {title, body} = props.news;
    const newsStyle = {
        border: '5px solid rgba(248, 246, 246, 0.897)',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor:  'white'
    }
    const clearStyle = {
        marginLeft: '95%'
    }
    return (
        <div style={newsStyle}> 
            <div style={clearStyle}>
            <ClearIcon></ClearIcon>
            </div>
           <h2>{title}</h2>
           <p>{body}</p>
        </div>
    );
};

export default News;