import { Tldraw } from 'tldraw'
import { RemoteTLStoreWithStatus, useSyncDemo } from '@tldraw/sync'
import '../../index.css'

export default function Envision() {
    const store: RemoteTLStoreWithStatus = useSyncDemo({ roomId: 'my-unique-room-id' })
    return (
        <div className="envisionParent" style={{
            position: 'fixed',
            height: '75%',
            width: '100%',
        }}>
            <Tldraw store={store}/>
        </div>
    )
}