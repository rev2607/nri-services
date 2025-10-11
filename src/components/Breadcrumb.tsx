import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (page: string) => void;
}

export default function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 mt-16 md:mt-20" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-lg font-semibold">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-5 h-5 text-gray-400 mx-2 flex-shrink-0" />
              )}
              
              {item.isActive ? (
                <span className="text-orange-600 font-bold">
                  {index === 0 && <Home className="w-5 h-5 inline mr-1" />}
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.href && onNavigate(item.href)}
                  className="text-gray-600 hover:text-orange-600 transition-colors flex items-center"
                >
                  {index === 0 && <Home className="w-5 h-5 inline mr-1" />}
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
