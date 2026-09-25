export default function PageHero({ kicker, title, body, image }) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-ivory sm:py-24">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/60" />
        </>
      )}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-brass/10 blur-3xl" />
      <div className="container relative z-10 max-w-content px-6 text-center lg:px-8">
        {kicker && (
          <p className="text-xs font-medium tracking-[0.15em] text-brass">{kicker}</p>
        )}
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
          {title}
        </h1>
        {body && (
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ivory/75">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
