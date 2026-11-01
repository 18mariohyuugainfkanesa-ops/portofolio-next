export default function SkillCard({ skill }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-blue-900">
        {skill.nama}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        Level: {skill.level}
      </p>
    </div>
  );
}