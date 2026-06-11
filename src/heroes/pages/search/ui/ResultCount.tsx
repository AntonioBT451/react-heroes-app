// src/heroes/pages/search/ui/ResultCount.tsx

interface Props {
    count: number;
}

export const ResultCount = ({ count = 0 }: Props) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
                <p className="text-gray-600">Showing {count ?? '0'} characters</p>
            </div>
        </div>
    )
}
