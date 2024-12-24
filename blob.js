const blob = document.getElementById("blob");

function remToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    /*animation:
    25% {scale: 1 1.4;}
    75%{scale: 1.3 1.1;}
    x = 1+0.3t, y = 1.4-0.3t
    f(t) = (x**2 + y**2)**0.5 = ((1+0.3t)**2 + (1.4-0.3t)**2)**0.5 = (2.96 -0.24t +0.018t^2)**0.5
    f'(t) = (-0.24+0.36t)/2*f(x)
    f'(t) = 0, t = 0.24/0.36
    f(0.6666) = 1.7205*/
    const halfBlobPx = remToPixels(12*1.721)/2;

    const width  = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    const x = Math.max(0, Math.min(width-halfBlobPx, clientX))
    const y = Math.max(0, Math.min(height-halfBlobPx, clientY))

    blob.animate({
        left: `${x}px`,
        top: `${y}px`
    }, { duration: 2000, fill: "forwards" });

}
