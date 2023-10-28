'use client'
export default function Error({ error, reset }: { error: any, reset: any }) {
    return (<div>
        This aint loading up: {error.message}

        <button onClick={() => reset()}>
            Reset
        </button>
    </div>)
}