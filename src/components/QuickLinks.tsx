export default function QuickLinks() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <a href="" className="text-gray-600 hover:text-orange-400 hover:underline">
                                Boliger til salg
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-gray-600 hover:text-orange-400 hover:underline">
                                Mæglere
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-gray-600 hover:text-orange-400 hover:underline">
                                Kontakt os
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-gray-600 hover:text-orange-400 hover:underline">
                                Log ind / bliv bruger
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        <div className="flex flex-col ">
          <span className="text-sm font-semibold text-gray-500">Medlem af</span>
          <span className="text-2xl font-semibold text-gray-700">DMS</span>
          <span className="text-sm text-gray-500">Dansk Mægler Sammenslutning</span>
        </div>
      </div>
    )
}