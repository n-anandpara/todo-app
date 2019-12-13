import React from 'react'
import '../styles/ListRendererStyle.css';
import PropTypes from 'prop-types';

const ListRenderer = ({dataList, onTaskComplete, onDelete}) => {
    return (
        dataList.map((element, index) => {
            return(
            <div key={index} className="d-flex p-2 line-divider">
                <input className='px-2 mt-2' type="checkbox" name={element.label} onChange={() => onTaskComplete(index)} />
                <span className={element.complete ? 'completed px-2' : 'px-2'}> {element.label} </span>
                <span className="ml-auto" onClick={() => onDelete(index)} ><i className="fa fa-times-circle"></i></span>
            </div>
            )
        })
    )
}

ListRenderer.propTypes = {
    dataList: PropTypes.array,
    onTaskComplete: PropTypes.func,
    onDelete: PropTypes.func,
}

ListRenderer.defaultProps = {
    dataList: [] ,
    onTaskComplete: () => {} ,
    onDelete: () => {},
}

export default ListRenderer;
