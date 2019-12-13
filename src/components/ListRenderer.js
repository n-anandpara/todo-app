import React from 'react'
import '../styles/ListRendererStyle.css';

const ListRenderer = ({dataList = []}) => {
    return (
        dataList.map((element, index) => {
            return <div key={index} > {element.label} </div>
        })
    )
}

export default ListRenderer;
