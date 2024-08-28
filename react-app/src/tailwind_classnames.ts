const classNames = ['bg-slate-50', 'bg-slate-100', 'bg-slate-150', 'bg-slate-200', 'bg-slate-250', 'bg-slate-300', 'bg-slate-350', 'bg-slate-400', 'bg-slate-450', 'bg-slate-500', 'bg-slate-550', 'bg-slate-600', 'bg-slate-650', 'bg-slate-700', 'bg-slate-750', 'bg-slate-800', 'bg-slate-850', 'bg-slate-800', 'bg-slate-850', 'text-slate-50', 'text-slate-100', 'text-slate-150', 'text-slate-200', 'text-slate-250', 'text-slate-300', 'text-slate-350', 'text-slate-400', 'text-slate-450', 'text-slate-500', 'text-slate-550', 'text-slate-600', 'text-slate-650', 'text-slate-700', 'text-slate-750', 'text-slate-800', 'text-slate-850', 'text-slate-800', 'text-slate-850', 'border-slate-50', 'border-slate-100', 'border-slate-150', 'border-slate-200', 'border-slate-250', 'border-slate-300', 'border-slate-350', 'border-slate-400', 'border-slate-450', 'border-slate-500', 'border-slate-550', 'border-slate-600', 'border-slate-650', 'border-slate-700', 'border-slate-750', 'border-slate-800', 'border-slate-850', 'border-slate-800', 'border-slate-850', 'bg-gray-50', 'bg-gray-100', 'bg-gray-150', 'bg-gray-200', 'bg-gray-250', 'bg-gray-300', 'bg-gray-350', 'bg-gray-400', 'bg-gray-450', 'bg-gray-500', 'bg-gray-550', 'bg-gray-600', 'bg-gray-650', 'bg-gray-700', 'bg-gray-750', 'bg-gray-800', 'bg-gray-850', 'bg-gray-800', 'bg-gray-850', 'text-gray-50', 'text-gray-100', 'text-gray-150', 'text-gray-200', 'text-gray-250', 'text-gray-300', 'text-gray-350', 'text-gray-400', 'text-gray-450', 'text-gray-500', 'text-gray-550', 'text-gray-600', 'text-gray-650', 'text-gray-700', 'text-gray-750', 'text-gray-800', 'text-gray-850', 'text-gray-800', 'text-gray-850', 'border-gray-50', 'border-gray-100', 'border-gray-150', 'border-gray-200', 'border-gray-250', 'border-gray-300', 'border-gray-350', 'border-gray-400', 'border-gray-450', 'border-gray-500', 'border-gray-550', 'border-gray-600', 'border-gray-650', 'border-gray-700', 'border-gray-750', 'border-gray-800', 'border-gray-850', 'border-gray-800', 'border-gray-850', 'bg-zinc-50', 'bg-zinc-100', 'bg-zinc-150', 'bg-zinc-200', 'bg-zinc-250', 'bg-zinc-300', 'bg-zinc-350', 'bg-zinc-400', 'bg-zinc-450', 'bg-zinc-500', 'bg-zinc-550', 'bg-zinc-600', 'bg-zinc-650', 'bg-zinc-700', 'bg-zinc-750', 'bg-zinc-800', 'bg-zinc-850', 'bg-zinc-800', 'bg-zinc-850', 'text-zinc-50', 'text-zinc-100', 'text-zinc-150', 'text-zinc-200', 'text-zinc-250', 'text-zinc-300', 'text-zinc-350', 'text-zinc-400', 'text-zinc-450', 'text-zinc-500', 'text-zinc-550', 'text-zinc-600', 'text-zinc-650', 'text-zinc-700', 'text-zinc-750', 'text-zinc-800', 'text-zinc-850', 'text-zinc-800', 'text-zinc-850', 'border-zinc-50', 'border-zinc-100', 'border-zinc-150', 'border-zinc-200', 'border-zinc-250', 'border-zinc-300', 'border-zinc-350', 'border-zinc-400', 'border-zinc-450', 'border-zinc-500', 'border-zinc-550', 'border-zinc-600', 'border-zinc-650', 'border-zinc-700', 'border-zinc-750', 'border-zinc-800', 'border-zinc-850', 'border-zinc-800', 'border-zinc-850', 'bg-neutral-50', 'bg-neutral-100', 'bg-neutral-150', 'bg-neutral-200', 'bg-neutral-250', 'bg-neutral-300', 'bg-neutral-350', 'bg-neutral-400', 'bg-neutral-450', 'bg-neutral-500', 'bg-neutral-550', 'bg-neutral-600', 'bg-neutral-650', 'bg-neutral-700', 'bg-neutral-750', 'bg-neutral-800', 'bg-neutral-850', 'bg-neutral-800', 'bg-neutral-850', 'text-neutral-50', 'text-neutral-100', 'text-neutral-150', 'text-neutral-200', 'text-neutral-250', 'text-neutral-300', 'text-neutral-350', 'text-neutral-400', 'text-neutral-450', 'text-neutral-500', 'text-neutral-550', 'text-neutral-600', 'text-neutral-650', 'text-neutral-700', 'text-neutral-750', 'text-neutral-800', 'text-neutral-850', 'text-neutral-800', 'text-neutral-850', 'border-neutral-50', 'border-neutral-100', 'border-neutral-150', 'border-neutral-200', 'border-neutral-250', 'border-neutral-300', 'border-neutral-350', 'border-neutral-400', 'border-neutral-450', 'border-neutral-500', 'border-neutral-550', 'border-neutral-600', 'border-neutral-650', 'border-neutral-700', 'border-neutral-750', 'border-neutral-800', 'border-neutral-850', 'border-neutral-800', 'border-neutral-850', 'bg-stone-50', 'bg-stone-100', 'bg-stone-150', 'bg-stone-200', 'bg-stone-250', 'bg-stone-300', 'bg-stone-350', 'bg-stone-400', 'bg-stone-450', 'bg-stone-500', 'bg-stone-550', 'bg-stone-600', 'bg-stone-650', 'bg-stone-700', 'bg-stone-750', 'bg-stone-800', 'bg-stone-850', 'bg-stone-800', 'bg-stone-850', 'text-stone-50', 'text-stone-100', 'text-stone-150', 'text-stone-200', 'text-stone-250', 'text-stone-300', 'text-stone-350', 'text-stone-400', 'text-stone-450', 'text-stone-500', 'text-stone-550', 'text-stone-600', 'text-stone-650', 'text-stone-700', 'text-stone-750', 'text-stone-800', 'text-stone-850', 'text-stone-800', 'text-stone-850', 'border-stone-50', 'border-stone-100', 'border-stone-150', 'border-stone-200', 'border-stone-250', 'border-stone-300', 'border-stone-350', 'border-stone-400', 'border-stone-450', 'border-stone-500', 'border-stone-550', 'border-stone-600', 'border-stone-650', 'border-stone-700', 'border-stone-750', 'border-stone-800', 'border-stone-850', 'border-stone-800', 'border-stone-850', 'bg-red-50', 'bg-red-100', 'bg-red-150', 'bg-red-200', 'bg-red-250', 'bg-red-300', 'bg-red-350', 'bg-red-400', 'bg-red-450', 'bg-red-500', 'bg-red-550', 'bg-red-600', 'bg-red-650', 'bg-red-700', 'bg-red-750', 'bg-red-800', 'bg-red-850', 'bg-red-800', 'bg-red-850', 'text-red-50', 'text-red-100', 'text-red-150', 'text-red-200', 'text-red-250', 'text-red-300', 'text-red-350', 'text-red-400', 'text-red-450', 'text-red-500', 'text-red-550', 'text-red-600', 'text-red-650', 'text-red-700', 'text-red-750', 'text-red-800', 'text-red-850', 'text-red-800', 'text-red-850', 'border-red-50', 'border-red-100', 'border-red-150', 'border-red-200', 'border-red-250', 'border-red-300', 'border-red-350', 'border-red-400', 'border-red-450', 'border-red-500', 'border-red-550', 'border-red-600', 'border-red-650', 'border-red-700', 'border-red-750', 'border-red-800', 'border-red-850', 'border-red-800', 'border-red-850', 'bg-orange-50', 'bg-orange-100', 'bg-orange-150', 'bg-orange-200', 'bg-orange-250', 'bg-orange-300', 'bg-orange-350', 'bg-orange-400', 'bg-orange-450', 'bg-orange-500', 'bg-orange-550', 'bg-orange-600', 'bg-orange-650', 'bg-orange-700', 'bg-orange-750', 'bg-orange-800', 'bg-orange-850', 'bg-orange-800', 'bg-orange-850', 'text-orange-50', 'text-orange-100', 'text-orange-150', 'text-orange-200', 'text-orange-250', 'text-orange-300', 'text-orange-350', 'text-orange-400', 'text-orange-450', 'text-orange-500', 'text-orange-550', 'text-orange-600', 'text-orange-650', 'text-orange-700', 'text-orange-750', 'text-orange-800', 'text-orange-850', 'text-orange-800', 'text-orange-850', 'border-orange-50', 'border-orange-100', 'border-orange-150', 'border-orange-200', 'border-orange-250', 'border-orange-300', 'border-orange-350', 'border-orange-400', 'border-orange-450', 'border-orange-500', 'border-orange-550', 'border-orange-600', 'border-orange-650', 'border-orange-700', 'border-orange-750', 'border-orange-800', 'border-orange-850', 'border-orange-800', 'border-orange-850', 'bg-amber-50', 'bg-amber-100', 'bg-amber-150', 'bg-amber-200', 'bg-amber-250', 'bg-amber-300', 'bg-amber-350', 'bg-amber-400', 'bg-amber-450', 'bg-amber-500', 'bg-amber-550', 'bg-amber-600', 'bg-amber-650', 'bg-amber-700', 'bg-amber-750', 'bg-amber-800', 'bg-amber-850', 'bg-amber-800', 'bg-amber-850', 'text-amber-50', 'text-amber-100', 'text-amber-150', 'text-amber-200', 'text-amber-250', 'text-amber-300', 'text-amber-350', 'text-amber-400', 'text-amber-450', 'text-amber-500', 'text-amber-550', 'text-amber-600', 'text-amber-650', 'text-amber-700', 'text-amber-750', 'text-amber-800', 'text-amber-850', 'text-amber-800', 'text-amber-850', 'border-amber-50', 'border-amber-100', 'border-amber-150', 'border-amber-200', 'border-amber-250', 'border-amber-300', 'border-amber-350', 'border-amber-400', 'border-amber-450', 'border-amber-500', 'border-amber-550', 'border-amber-600', 'border-amber-650', 'border-amber-700', 'border-amber-750', 'border-amber-800', 'border-amber-850', 'border-amber-800', 'border-amber-850', 'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-150', 'bg-yellow-200', 'bg-yellow-250', 'bg-yellow-300', 'bg-yellow-350', 'bg-yellow-400', 'bg-yellow-450', 'bg-yellow-500', 'bg-yellow-550', 'bg-yellow-600', 'bg-yellow-650', 'bg-yellow-700', 'bg-yellow-750', 'bg-yellow-800', 'bg-yellow-850', 'bg-yellow-800', 'bg-yellow-850', 'text-yellow-50', 'text-yellow-100', 'text-yellow-150', 'text-yellow-200', 'text-yellow-250', 'text-yellow-300', 'text-yellow-350', 'text-yellow-400', 'text-yellow-450', 'text-yellow-500', 'text-yellow-550', 'text-yellow-600', 'text-yellow-650', 'text-yellow-700', 'text-yellow-750', 'text-yellow-800', 'text-yellow-850', 'text-yellow-800', 'text-yellow-850', 'border-yellow-50', 'border-yellow-100', 'border-yellow-150', 'border-yellow-200', 'border-yellow-250', 'border-yellow-300', 'border-yellow-350', 'border-yellow-400', 'border-yellow-450', 'border-yellow-500', 'border-yellow-550', 'border-yellow-600', 'border-yellow-650', 'border-yellow-700', 'border-yellow-750', 'border-yellow-800', 'border-yellow-850', 'border-yellow-800', 'border-yellow-850', 'bg-lime-50', 'bg-lime-100', 'bg-lime-150', 'bg-lime-200', 'bg-lime-250', 'bg-lime-300', 'bg-lime-350', 'bg-lime-400', 'bg-lime-450', 'bg-lime-500', 'bg-lime-550', 'bg-lime-600', 'bg-lime-650', 'bg-lime-700', 'bg-lime-750', 'bg-lime-800', 'bg-lime-850', 'bg-lime-800', 'bg-lime-850', 'text-lime-50', 'text-lime-100', 'text-lime-150', 'text-lime-200', 'text-lime-250', 'text-lime-300', 'text-lime-350', 'text-lime-400', 'text-lime-450', 'text-lime-500', 'text-lime-550', 'text-lime-600', 'text-lime-650', 'text-lime-700', 'text-lime-750', 'text-lime-800', 'text-lime-850', 'text-lime-800', 'text-lime-850', 'border-lime-50', 'border-lime-100', 'border-lime-150', 'border-lime-200', 'border-lime-250', 'border-lime-300', 'border-lime-350', 'border-lime-400', 'border-lime-450', 'border-lime-500', 'border-lime-550', 'border-lime-600', 'border-lime-650', 'border-lime-700', 'border-lime-750', 'border-lime-800', 'border-lime-850', 'border-lime-800', 'border-lime-850', 'bg-green-50', 'bg-green-100', 'bg-green-150', 'bg-green-200', 'bg-green-250', 'bg-green-300', 'bg-green-350', 'bg-green-400', 'bg-green-450', 'bg-green-500', 'bg-green-550', 'bg-green-600', 'bg-green-650', 'bg-green-700', 'bg-green-750', 'bg-green-800', 'bg-green-850', 'bg-green-800', 'bg-green-850', 'text-green-50', 'text-green-100', 'text-green-150', 'text-green-200', 'text-green-250', 'text-green-300', 'text-green-350', 'text-green-400', 'text-green-450', 'text-green-500', 'text-green-550', 'text-green-600', 'text-green-650', 'text-green-700', 'text-green-750', 'text-green-800', 'text-green-850', 'text-green-800', 'text-green-850', 'border-green-50', 'border-green-100', 'border-green-150', 'border-green-200', 'border-green-250', 'border-green-300', 'border-green-350', 'border-green-400', 'border-green-450', 'border-green-500', 'border-green-550', 'border-green-600', 'border-green-650', 'border-green-700', 'border-green-750', 'border-green-800', 'border-green-850', 'border-green-800', 'border-green-850', 'bg-emerald-50', 'bg-emerald-100', 'bg-emerald-150', 'bg-emerald-200', 'bg-emerald-250', 'bg-emerald-300', 'bg-emerald-350', 'bg-emerald-400', 'bg-emerald-450', 'bg-emerald-500', 'bg-emerald-550', 'bg-emerald-600', 'bg-emerald-650', 'bg-emerald-700', 'bg-emerald-750', 'bg-emerald-800', 'bg-emerald-850', 'bg-emerald-800', 'bg-emerald-850', 'text-emerald-50', 'text-emerald-100', 'text-emerald-150', 'text-emerald-200', 'text-emerald-250', 'text-emerald-300', 'text-emerald-350', 'text-emerald-400', 'text-emerald-450', 'text-emerald-500', 'text-emerald-550', 'text-emerald-600', 'text-emerald-650', 'text-emerald-700', 'text-emerald-750', 'text-emerald-800', 'text-emerald-850', 'text-emerald-800', 'text-emerald-850', 'border-emerald-50', 'border-emerald-100', 'border-emerald-150', 'border-emerald-200', 'border-emerald-250', 'border-emerald-300', 'border-emerald-350', 'border-emerald-400', 'border-emerald-450', 'border-emerald-500', 'border-emerald-550', 'border-emerald-600', 'border-emerald-650', 'border-emerald-700', 'border-emerald-750', 'border-emerald-800', 'border-emerald-850', 'border-emerald-800', 'border-emerald-850', 'bg-teal-50', 'bg-teal-100', 'bg-teal-150', 'bg-teal-200', 'bg-teal-250', 'bg-teal-300', 'bg-teal-350', 'bg-teal-400', 'bg-teal-450', 'bg-teal-500', 'bg-teal-550', 'bg-teal-600', 'bg-teal-650', 'bg-teal-700', 'bg-teal-750', 'bg-teal-800', 'bg-teal-850', 'bg-teal-800', 'bg-teal-850', 'text-teal-50', 'text-teal-100', 'text-teal-150', 'text-teal-200', 'text-teal-250', 'text-teal-300', 'text-teal-350', 'text-teal-400', 'text-teal-450', 'text-teal-500', 'text-teal-550', 'text-teal-600', 'text-teal-650', 'text-teal-700', 'text-teal-750', 'text-teal-800', 'text-teal-850', 'text-teal-800', 'text-teal-850', 'border-teal-50', 'border-teal-100', 'border-teal-150', 'border-teal-200', 'border-teal-250', 'border-teal-300', 'border-teal-350', 'border-teal-400', 'border-teal-450', 'border-teal-500', 'border-teal-550', 'border-teal-600', 'border-teal-650', 'border-teal-700', 'border-teal-750', 'border-teal-800', 'border-teal-850', 'border-teal-800', 'border-teal-850', 'bg-cyan-50', 'bg-cyan-100', 'bg-cyan-150', 'bg-cyan-200', 'bg-cyan-250', 'bg-cyan-300', 'bg-cyan-350', 'bg-cyan-400', 'bg-cyan-450', 'bg-cyan-500', 'bg-cyan-550', 'bg-cyan-600', 'bg-cyan-650', 'bg-cyan-700', 'bg-cyan-750', 'bg-cyan-800', 'bg-cyan-850', 'bg-cyan-800', 'bg-cyan-850', 'text-cyan-50', 'text-cyan-100', 'text-cyan-150', 'text-cyan-200', 'text-cyan-250', 'text-cyan-300', 'text-cyan-350', 'text-cyan-400', 'text-cyan-450', 'text-cyan-500', 'text-cyan-550', 'text-cyan-600', 'text-cyan-650', 'text-cyan-700', 'text-cyan-750', 'text-cyan-800', 'text-cyan-850', 'text-cyan-800', 'text-cyan-850', 'border-cyan-50', 'border-cyan-100', 'border-cyan-150', 'border-cyan-200', 'border-cyan-250', 'border-cyan-300', 'border-cyan-350', 'border-cyan-400', 'border-cyan-450', 'border-cyan-500', 'border-cyan-550', 'border-cyan-600', 'border-cyan-650', 'border-cyan-700', 'border-cyan-750', 'border-cyan-800', 'border-cyan-850', 'border-cyan-800', 'border-cyan-850', 'bg-sky-50', 'bg-sky-100', 'bg-sky-150', 'bg-sky-200', 'bg-sky-250', 'bg-sky-300', 'bg-sky-350', 'bg-sky-400', 'bg-sky-450', 'bg-sky-500', 'bg-sky-550', 'bg-sky-600', 'bg-sky-650', 'bg-sky-700', 'bg-sky-750', 'bg-sky-800', 'bg-sky-850', 'bg-sky-800', 'bg-sky-850', 'text-sky-50', 'text-sky-100', 'text-sky-150', 'text-sky-200', 'text-sky-250', 'text-sky-300', 'text-sky-350', 'text-sky-400', 'text-sky-450', 'text-sky-500', 'text-sky-550', 'text-sky-600', 'text-sky-650', 'text-sky-700', 'text-sky-750', 'text-sky-800', 'text-sky-850', 'text-sky-800', 'text-sky-850', 'border-sky-50', 'border-sky-100', 'border-sky-150', 'border-sky-200', 'border-sky-250', 'border-sky-300', 'border-sky-350', 'border-sky-400', 'border-sky-450', 'border-sky-500', 'border-sky-550', 'border-sky-600', 'border-sky-650', 'border-sky-700', 'border-sky-750', 'border-sky-800', 'border-sky-850', 'border-sky-800', 'border-sky-850', 'bg-blue-50', 'bg-blue-100', 'bg-blue-150', 'bg-blue-200', 'bg-blue-250', 'bg-blue-300', 'bg-blue-350', 'bg-blue-400', 'bg-blue-450', 'bg-blue-500', 'bg-blue-550', 'bg-blue-600', 'bg-blue-650', 'bg-blue-700', 'bg-blue-750', 'bg-blue-800', 'bg-blue-850', 'bg-blue-800', 'bg-blue-850', 'text-blue-50', 'text-blue-100', 'text-blue-150', 'text-blue-200', 'text-blue-250', 'text-blue-300', 'text-blue-350', 'text-blue-400', 'text-blue-450', 'text-blue-500', 'text-blue-550', 'text-blue-600', 'text-blue-650', 'text-blue-700', 'text-blue-750', 'text-blue-800', 'text-blue-850', 'text-blue-800', 'text-blue-850', 'border-blue-50', 'border-blue-100', 'border-blue-150', 'border-blue-200', 'border-blue-250', 'border-blue-300', 'border-blue-350', 'border-blue-400', 'border-blue-450', 'border-blue-500', 'border-blue-550', 'border-blue-600', 'border-blue-650', 'border-blue-700', 'border-blue-750', 'border-blue-800', 'border-blue-850', 'border-blue-800', 'border-blue-850', 'bg-indigo-50', 'bg-indigo-100', 'bg-indigo-150', 'bg-indigo-200', 'bg-indigo-250', 'bg-indigo-300', 'bg-indigo-350', 'bg-indigo-400', 'bg-indigo-450', 'bg-indigo-500', 'bg-indigo-550', 'bg-indigo-600', 'bg-indigo-650', 'bg-indigo-700', 'bg-indigo-750', 'bg-indigo-800', 'bg-indigo-850', 'bg-indigo-800', 'bg-indigo-850', 'text-indigo-50', 'text-indigo-100', 'text-indigo-150', 'text-indigo-200', 'text-indigo-250', 'text-indigo-300', 'text-indigo-350', 'text-indigo-400', 'text-indigo-450', 'text-indigo-500', 'text-indigo-550', 'text-indigo-600', 'text-indigo-650', 'text-indigo-700', 'text-indigo-750', 'text-indigo-800', 'text-indigo-850', 'text-indigo-800', 'text-indigo-850', 'border-indigo-50', 'border-indigo-100', 'border-indigo-150', 'border-indigo-200', 'border-indigo-250', 'border-indigo-300', 'border-indigo-350', 'border-indigo-400', 'border-indigo-450', 'border-indigo-500', 'border-indigo-550', 'border-indigo-600', 'border-indigo-650', 'border-indigo-700', 'border-indigo-750', 'border-indigo-800', 'border-indigo-850', 'border-indigo-800', 'border-indigo-850', 'bg-violet-50', 'bg-violet-100', 'bg-violet-150', 'bg-violet-200', 'bg-violet-250', 'bg-violet-300', 'bg-violet-350', 'bg-violet-400', 'bg-violet-450', 'bg-violet-500', 'bg-violet-550', 'bg-violet-600', 'bg-violet-650', 'bg-violet-700', 'bg-violet-750', 'bg-violet-800', 'bg-violet-850', 'bg-violet-800', 'bg-violet-850', 'text-violet-50', 'text-violet-100', 'text-violet-150', 'text-violet-200', 'text-violet-250', 'text-violet-300', 'text-violet-350', 'text-violet-400', 'text-violet-450', 'text-violet-500', 'text-violet-550', 'text-violet-600', 'text-violet-650', 'text-violet-700', 'text-violet-750', 'text-violet-800', 'text-violet-850', 'text-violet-800', 'text-violet-850', 'border-violet-50', 'border-violet-100', 'border-violet-150', 'border-violet-200', 'border-violet-250', 'border-violet-300', 'border-violet-350', 'border-violet-400', 'border-violet-450', 'border-violet-500', 'border-violet-550', 'border-violet-600', 'border-violet-650', 'border-violet-700', 'border-violet-750', 'border-violet-800', 'border-violet-850', 'border-violet-800', 'border-violet-850', 'bg-purple-50', 'bg-purple-100', 'bg-purple-150', 'bg-purple-200', 'bg-purple-250', 'bg-purple-300', 'bg-purple-350', 'bg-purple-400', 'bg-purple-450', 'bg-purple-500', 'bg-purple-550', 'bg-purple-600', 'bg-purple-650', 'bg-purple-700', 'bg-purple-750', 'bg-purple-800', 'bg-purple-850', 'bg-purple-800', 'bg-purple-850', 'text-purple-50', 'text-purple-100', 'text-purple-150', 'text-purple-200', 'text-purple-250', 'text-purple-300', 'text-purple-350', 'text-purple-400', 'text-purple-450', 'text-purple-500', 'text-purple-550', 'text-purple-600', 'text-purple-650', 'text-purple-700', 'text-purple-750', 'text-purple-800', 'text-purple-850', 'text-purple-800', 'text-purple-850', 'border-purple-50', 'border-purple-100', 'border-purple-150', 'border-purple-200', 'border-purple-250', 'border-purple-300', 'border-purple-350', 'border-purple-400', 'border-purple-450', 'border-purple-500', 'border-purple-550', 'border-purple-600', 'border-purple-650', 'border-purple-700', 'border-purple-750', 'border-purple-800', 'border-purple-850', 'border-purple-800', 'border-purple-850', 'bg-fichsia-50', 'bg-fichsia-100', 'bg-fichsia-150', 'bg-fichsia-200', 'bg-fichsia-250', 'bg-fichsia-300', 'bg-fichsia-350', 'bg-fichsia-400', 'bg-fichsia-450', 'bg-fichsia-500', 'bg-fichsia-550', 'bg-fichsia-600', 'bg-fichsia-650', 'bg-fichsia-700', 'bg-fichsia-750', 'bg-fichsia-800', 'bg-fichsia-850', 'bg-fichsia-800', 'bg-fichsia-850', 'text-fichsia-50', 'text-fichsia-100', 'text-fichsia-150', 'text-fichsia-200', 'text-fichsia-250', 'text-fichsia-300', 'text-fichsia-350', 'text-fichsia-400', 'text-fichsia-450', 'text-fichsia-500', 'text-fichsia-550', 'text-fichsia-600', 'text-fichsia-650', 'text-fichsia-700', 'text-fichsia-750', 'text-fichsia-800', 'text-fichsia-850', 'text-fichsia-800', 'text-fichsia-850', 'border-fichsia-50', 'border-fichsia-100', 'border-fichsia-150', 'border-fichsia-200', 'border-fichsia-250', 'border-fichsia-300', 'border-fichsia-350', 'border-fichsia-400', 'border-fichsia-450', 'border-fichsia-500', 'border-fichsia-550', 'border-fichsia-600', 'border-fichsia-650', 'border-fichsia-700', 'border-fichsia-750', 'border-fichsia-800', 'border-fichsia-850', 'border-fichsia-800', 'border-fichsia-850', 'bg-pink-50', 'bg-pink-100', 'bg-pink-150', 'bg-pink-200', 'bg-pink-250', 'bg-pink-300', 'bg-pink-350', 'bg-pink-400', 'bg-pink-450', 'bg-pink-500', 'bg-pink-550', 'bg-pink-600', 'bg-pink-650', 'bg-pink-700', 'bg-pink-750', 'bg-pink-800', 'bg-pink-850', 'bg-pink-800', 'bg-pink-850', 'text-pink-50', 'text-pink-100', 'text-pink-150', 'text-pink-200', 'text-pink-250', 'text-pink-300', 'text-pink-350', 'text-pink-400', 'text-pink-450', 'text-pink-500', 'text-pink-550', 'text-pink-600', 'text-pink-650', 'text-pink-700', 'text-pink-750', 'text-pink-800', 'text-pink-850', 'text-pink-800', 'text-pink-850', 'border-pink-50', 'border-pink-100', 'border-pink-150', 'border-pink-200', 'border-pink-250', 'border-pink-300', 'border-pink-350', 'border-pink-400', 'border-pink-450', 'border-pink-500', 'border-pink-550', 'border-pink-600', 'border-pink-650', 'border-pink-700', 'border-pink-750', 'border-pink-800', 'border-pink-850', 'border-pink-800', 'border-pink-850', 'bg-rose-50', 'bg-rose-100', 'bg-rose-150', 'bg-rose-200', 'bg-rose-250', 'bg-rose-300', 'bg-rose-350', 'bg-rose-400', 'bg-rose-450', 'bg-rose-500', 'bg-rose-550', 'bg-rose-600', 'bg-rose-650', 'bg-rose-700', 'bg-rose-750', 'bg-rose-800', 'bg-rose-850', 'bg-rose-800', 'bg-rose-850', 'text-rose-50', 'text-rose-100', 'text-rose-150', 'text-rose-200', 'text-rose-250', 'text-rose-300', 'text-rose-350', 'text-rose-400', 'text-rose-450', 'text-rose-500', 'text-rose-550', 'text-rose-600', 'text-rose-650', 'text-rose-700', 'text-rose-750', 'text-rose-800', 'text-rose-850', 'text-rose-800', 'text-rose-850', 'border-rose-50', 'border-rose-100', 'border-rose-150', 'border-rose-200', 'border-rose-250', 'border-rose-300', 'border-rose-350', 'border-rose-400', 'border-rose-450', 'border-rose-500', 'border-rose-550', 'border-rose-600', 'border-rose-650', 'border-rose-700', 'border-rose-750', 'border-rose-800', 'border-rose-850', 'border-rose-800', 'border-rose-850'];