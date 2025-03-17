import React from 'react'
import "./Model.css"
import { useUser } from '../../context'

const Model = () => {

    const { allColors } = useUser()

    return (
        <div className='Modelbody'>
            <article style={{ background: `${allColors.color}` }}>
                hello
            </article>
        </div>
    )
}

export default Model
