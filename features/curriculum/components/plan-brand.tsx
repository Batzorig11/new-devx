import Link from "next/link";

export function PlanBrand({ linked = false }: { linked?: boolean }) {
  const content = (
    <>
      <span>AI</span>
      <strong>FRONTEND ENGINEERING</strong>
    </>
  );

  if (linked) {
    return (
      <Link className="plan-brand" href="/" aria-label="Хичээлүүд рүү буцах">
        {content}
      </Link>
    );
  }

  return <div className="plan-brand">{content}</div>;
}
