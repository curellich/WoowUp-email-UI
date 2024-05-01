export async function POST(request) {
    const body = await request.json()
    let res, status;
    try {
        await fetch(`http://${process.env.NEXT_URL_BASE}:3001/api/v1/emails`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(async response => {
            status = response.status;
            res = await response.json();
        })
    }catch (e) {
        console.error(e);
    }

    return new Response(JSON.stringify({ res }), { status })
}