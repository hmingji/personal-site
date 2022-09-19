interface Props {
  title: string;
  description: string;
  tags: string[];
  appUrl: string;
  sourceUrl: string;
  imageUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  appUrl,
  sourceUrl,
  imageUrl,
}: Props) {
  return (
    <div className="card bg-base-100 lg:card-side">
      <div className="card-body pb-4 lg:py-0">
        <div>
          {tags.map((tag) => {
            return (
              <span
                className="mr-2 text-gray-600 text-xs"
                key={tag}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <h2 className="card-title text-2xl mb-2">{title}</h2>
        <p>{description}</p>

        <div className="card-actions justify-start">
          <a
            className="btn btn-primary"
            href={appUrl}
            target="_blank"
            rel="noreferrer"
          >
            View App
          </a>
          <a
            className="btn btn-primary"
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Source
          </a>
        </div>
      </div>
      <figure className="sm:px-0 px-8">
        <img
          src={imageUrl}
          alt="Album"
          className="rounded-md object-cover object-left-top sm:w-[400px] h-full w-full"
        />
      </figure>
    </div>
  );
}
