const Fofocas = ({ fofocas }) => {
    return (
        <section>
            <h1>Fofocas</h1>
            {fofocas.map((fofoca) => (
                <article key={fofoca.id} style={{ padding: '10px', margin: '10px 0', border: '1px solid #eee' }}>
                    <h2>{fofoca.manchete}</h2>
                    <p>{fofoca.texto}</p>
                </article>
            ))}
        </section>
    );
};

export default Fofocas;
