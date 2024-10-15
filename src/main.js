import {
    bootstrapCameraKit,
    createMediaStreamSource,
    Transform2D,
} from '@snap/camera-kit'

(async function () {
    var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI3MTM1NzY2LCJzdWIiOiIzNzExYTJiZS1kZjRmLTRjYTktYmZlZS1kMTdhMWRiNTNhMGN-U1RBR0lOR35mZTE4NTM1OS1hOWQxLTQzYWMtODVhYi02Mjc2MzI1NTYzNTUifQ.d7l5OToqU6UCkKcDfVMi4tPDnT3RtU0WiRBBBGR661I' })

    const session = await cameraKit.createSession()
    document.getElementById('canvas').replaceWith(session.output.live)

    const { lenses } = await cameraKit.lensRepository.loadLensGroups(['080970b2-cafb-4dd5-8d0c-73b257e4341e'])

    session.applyLens(lenses[0])

    let mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: 'environment'
        }
    });

    const source = createMediaStreamSource(mediaStream, {
        cameraType: 'back'
    })

    await session.setSource(source)
    session.source.setRenderSize(500, 400)
    session.play()

    document.getElementById('GreenFITShirt').addEventListener('click', () => {
        session.applyLens(lenses[2]);
    });

    document.getElementById('PinkFITShirt').addEventListener('click', () => {
        session.applyLens(lenses[3]);
    });

    document.getElementById('WhiteSBUShirt').addEventListener('click', () => {
        session.applyLens(lenses[0]);
    });
})();
