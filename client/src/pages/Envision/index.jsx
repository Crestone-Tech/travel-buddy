import React from "react";
import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import '../../index.css'

const assetUrls = {}

export default function Envision() {
    const store = useSyncDemo({ roomId: 'my-unique-room-id' })
    return (
        <div className="envisionParent">
            <Tldraw store={store}/>
        </div>
    )
}