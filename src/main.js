import {
    bootstrapCameraKit,
    createMediaStreamSource,
    Transform2D,
} from '@snap/camera-kit'

(async function () {

    await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
    });

    const path = window.location.pathname;
    if (path === '/') {
        console.log('testing')
        document.getElementById('TShirtButton').addEventListener('click', () => {
            window.location.href = '/TShirts.html';
        });

        document.getElementById('SweatshirtButton').addEventListener('click', () => {
            window.location.href = '/Sweatshirts.html';
        });

        document.getElementById('HoodieButton').addEventListener('click', () => {
            window.location.href = '/Hoodies.html';
        });
    }

    else if (path === '/tshirts') {
        var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI3MTM1NzY2LCJzdWIiOiIzNzExYTJiZS1kZjRmLTRjYTktYmZlZS1kMTdhMWRiNTNhMGN-U1RBR0lOR35mZTE4NTM1OS1hOWQxLTQzYWMtODVhYi02Mjc2MzI1NTYzNTUifQ.d7l5OToqU6UCkKcDfVMi4tPDnT3RtU0WiRBBBGR661I' })

        const session = await cameraKit.createSession()
        document.getElementById('canvas').replaceWith(session.output.live)

        const { lenses } = await cameraKit.lensRepository.loadLensGroups(['10715257-0fb4-4e6d-96a6-62185e12e129'])

        session.applyLens(lenses[1])

        let mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'user'
            }
        });

        const source = createMediaStreamSource(mediaStream, {
            cameraType: 'front'
        })

        await session.setSource(source)
        session.source.setRenderSize(500, 500)
        session.play()

        document.getElementById('RedTShirt').addEventListener('click', () => {
            session.applyLens(lenses[3]);
        });

        document.getElementById('GreyTShirt').addEventListener('click', () => {
            session.applyLens(lenses[1]);
        });

        document.getElementById('WhiteTShirt').addEventListener('click', () => {
            session.applyLens(lenses[0]);
        });
    }

    else if (path === '/sweatshirts') {
        var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI3MTM1NzY2LCJzdWIiOiIzNzExYTJiZS1kZjRmLTRjYTktYmZlZS1kMTdhMWRiNTNhMGN-U1RBR0lOR35mZTE4NTM1OS1hOWQxLTQzYWMtODVhYi02Mjc2MzI1NTYzNTUifQ.d7l5OToqU6UCkKcDfVMi4tPDnT3RtU0WiRBBBGR661I' })

        const session = await cameraKit.createSession()
        document.getElementById('canvas').replaceWith(session.output.live)

        const { lenses } = await cameraKit.lensRepository.loadLensGroups(['10715257-0fb4-4e6d-96a6-62185e12e129'])

        session.applyLens(lenses[1])

        let mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'user'
            }
        });

        const source = createMediaStreamSource(mediaStream, {
            cameraType: 'front'
        })

        await session.setSource(source)
        session.source.setRenderSize(500, 500)
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
    }

    else if (path === '/hoodies') {
        var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI3MTM1NzY2LCJzdWIiOiIzNzExYTJiZS1kZjRmLTRjYTktYmZlZS1kMTdhMWRiNTNhMGN-U1RBR0lOR35mZTE4NTM1OS1hOWQxLTQzYWMtODVhYi02Mjc2MzI1NTYzNTUifQ.d7l5OToqU6UCkKcDfVMi4tPDnT3RtU0WiRBBBGR661I' })

        const session = await cameraKit.createSession()
        document.getElementById('canvas').replaceWith(session.output.live)

        const { lenses } = await cameraKit.lensRepository.loadLensGroups(['10715257-0fb4-4e6d-96a6-62185e12e129'])

        session.applyLens(lenses[1])

        let mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'user'
            }
        });

        const source = createMediaStreamSource(mediaStream, {
            cameraType: 'front'
        })

        await session.setSource(source)
        session.source.setRenderSize(500, 1000)
        session.play()

        document.getElementById('RedTShirt').addEventListener('click', () => {
            session.applyLens(lenses[2]);
        });

        document.getElementById('GreyTShirt').addEventListener('click', () => {
            session.applyLens(lenses[3]);
        });

        document.getElementById('WhiteTShirt').addEventListener('click', () => {
            session.applyLens(lenses[0]);
        });
    }

})();
