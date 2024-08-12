import React from "react";
import { Tldraw } from 'tldraw'
import '../../index.css'

const assetUrls = {}

export default function Envision() {
    return (
        <div className="envisionParent">
            <Tldraw />
        </div>
    )
}