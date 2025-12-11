interface PlaceholderProps {
  title: string
  description?: string
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        {description && <p className="text-lg text-gray-600 mb-8">{description}</p>}
        <div className="bg-gray-100 rounded-lg p-12">
          <p className="text-gray-500">This section is coming soon...</p>
        </div>
      </div>
    </div>
  )
}

