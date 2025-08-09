import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">ページが見つかりません</h2>
          <p className="text-slate-600 leading-relaxed">お探しのページは存在しないか、移動された可能性があります。</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              戻る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
