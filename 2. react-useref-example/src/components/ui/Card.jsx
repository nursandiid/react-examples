/* eslint-disable react/prop-types */
export default function Card({ title, children, className = '' }) {
  return (
    <div
      className={`shadow rounded-lg border border-slate-400 p-4 ${className}`}
    >
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      {children}
    </div>
  )
}
