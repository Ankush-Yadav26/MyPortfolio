type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const words = title.split(" ");
  const lead = words.slice(0, -1).join(" ");
  const accent = words[words.length - 1] ?? "";

  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {lead}{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-rose-400 bg-clip-text text-transparent">
          {accent}
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">{subtitle}</p>
      <div className="mx-auto mt-5 h-0.5 w-28 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
    </div>
  );
}
