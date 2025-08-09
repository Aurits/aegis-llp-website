"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Award, Calendar, ExternalLink, Globe, Mail, MapPin, Phone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Company data - in a real app, this would come from a CMS or API
const companies = {
    "1": {
        id: "1",
        name: "テックフロー・ソリューション",
        tagline: "デジタルインフラの卓越性",
        specialization: "クラウドインフラとシステム統合",
        established: "2018",
        employees: "45+",
        headquarters: "日本、東京",
        description:
            "テックフロー・ソリューションは政府グレードのデジタルインフラを専門とし、日本全国の自治体や都道府県レベルの組織にスケーラブルなクラウドソリューションとシステム統合サービスを提供しています。",
        mission:
            "最先端のクラウドインフラとシームレスなシステム統合を通じて政府運営を現代化し、24時間365日の信頼性とセキュリティコンプライアンスを保証します。",
        services: [
            {
                name: "クラウド移行",
                description:
                    "レガシー政府システムの最新クラウドプラットフォームへのゼロダウンタイムでの包括的な移行。",
                technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
            },
            {
                name: "システム統合",
                description: "統一された運用のための分散した政府システムのシームレスな統合。",
                technologies: ["API Gateway", "Microservices", "Docker", "Terraform"],
            },
            {
                name: "インフラ監視",
                description: "重要な政府インフラの24時間365日の監視と保守。",
                technologies: ["Prometheus", "Grafana", "ELK Stack", "Nagios"],
            },
        ],
        achievements: [
            "15の市役所のクラウドインフラへの成功した移行",
            "すべての政府クライアントで99.9%の稼働率を達成",
            "インフラコストを平均40%削減",
            "METI認定クラウドセキュリティ実装",
        ],
        projects: [
            {
                name: "大阪府デジタルインフラ",
                client: "大阪府政府",
                year: "2024",
                description: "280万人の市民にサービスを提供する完全なデジタルインフラの見直し",
            },
            {
                name: "東京スマートシティIoTプラットフォーム",
                client: "東京都政府",
                year: "2023",
                description: "10,000個以上のセンサーを持つIoT統合プラットフォーム",
            },
        ],
        team: {
            leadership: "田中博、最高技術責任者",
            expertise: ["クラウドアーキテクチャ", "DevOps", "セキュリティコンプライアンス", "政府関係"],
            certifications: ["AWSソリューションアーキテクト", "Azureエキスパート", "Google Cloudプロフェッショナル"],
        },
        contact: {
            email: "contact@techflow.aegisllp.com",
            phone: "+81-3-1234-5679",
            website: "https://techflow.aegisllp.com",
        },
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29-bmwbVkyWCQIPIRqPQcEdzDBy6lGAYz.jpeg",
    },
    "2": {
        id: "2",
        name: "データコア・システムズ",
        tagline: "インテリジェントデータソリューション",
        specialization: "データ分析とビジネスインテリジェンス",
        established: "2016",
        employees: "38+",
        headquarters: "日本、大阪",
        description:
            "データコア・システムズは政府データを実行可能な洞察に変換し、情報に基づいた政策決定を促進し、市民サービスを改善する高度な分析とビジネスインテリジェンスソリューションを提供しています。",
        mission:
            "高度な分析、機械学習、インテリジェントレポートシステムを通じて政府機関のデータ駆動意思決定を支援します。",
        services: [
            {
                name: "データ分析プラットフォーム",
                description: "政府データ処理と洞察生成のための包括的な分析プラットフォーム。",
                technologies: ["Apache Spark", "Elasticsearch", "Power BI", "Tableau"],
            },
            {
                name: "予測分析",
                description: "リソース計画と市民サービス最適化のためのAI駆動予測モデル。",
                technologies: ["TensorFlow", "Python", "R", "Machine Learning"],
            },
            {
                name: "リアルタイムダッシュボード",
                description: "政府運営のためのリアルタイム洞察を提供するインタラクティブダッシュボード。",
                technologies: ["React", "D3.js", "WebSocket", "Redis"],
            },
        ],
        achievements: [
            "年間100TB以上の政府データを処理",
            "クライアント機関の意思決定速度を60%改善",
            "50個以上のカスタム分析ソリューションを開発",
            "ISO 27001認定データセキュリティ実践",
        ],
        projects: [
            {
                name: "京都医療データ管理",
                client: "京都府保健部",
                year: "2024",
                description: "50万人の患者にサービスを提供する統一医療データシステム",
            },
            {
                name: "自治体リソース最適化",
                client: "名古屋市政府",
                year: "2023",
                description: "AI駆動リソース配置システム",
            },
        ],
        team: {
            leadership: "佐藤雪、データサイエンス責任者",
            expertise: ["データサイエンス", "機械学習", "ビジネスインテリジェンス", "統計分析"],
            certifications: ["Microsoftデータアナリスト", "Googleデータエンジニア", "AWS機械学習"],
        },
        contact: {
            email: "contact@datacore.aegisllp.com",
            phone: "+81-6-1234-5679",
            website: "https://datacore.aegisllp.com",
        },
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
    },
    "3": {
        id: "3",
        name: "ウェブクラフト・デジタル",
        tagline: "市民中心のデザイン",
        specialization: "ウェブ開発とユーザーエクスペリエンス",
        established: "2019",
        employees: "32+",
        headquarters: "日本、京都",
        description:
            "ウェブクラフト・デジタルは、政府サービスと市民の間のギャップを埋める直感的でアクセシブルなウェブアプリケーションを作成し、ユーザーエクスペリエンスとデジタルアクセシビリティに焦点を当てています。",
        mission:
            "年齢や技術的能力に関係なく、すべての市民が政府サービスにアクセスできるユーザーフレンドリーなデジタルインターフェースを設計・開発します。",
        services: [
            {
                name: "政府ウェブポータル",
                description: "アクセシビリティと使いやすさに焦点を当てた自治体サービスの包括的なウェブポータル。",
                technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            },
            {
                name: "市民サービスアプリケーション",
                description: "市民と政府サービスのやり取りを簡素化するデジタルアプリケーション。",
                technologies: ["Progressive Web Apps", "Node.js", "GraphQL", "MongoDB"],
            },
            {
                name: "アクセシビリティコンプライアンス",
                description: "すべてのデジタルサービスがWCAG 2.1 AAアクセシビリティ基準を満たすことを保証。",
                technologies: ["ARIA", "Screen Reader Testing", "Color Contrast Tools", "Keyboard Navigation"],
            },
        ],
        achievements: [
            "すべてのプロジェクトで95%の市民満足度を達成",
            "すべての納入アプリケーションでWCAG 2.1 AA遵守",
            "サービス完了時間を平均70%短縮",
            "年間500万人以上の市民が使用するインターフェースを設計",
        ],
        projects: [
            {
                name: "名古屋デジタルサービスプラットフォーム",
                client: "名古屋市政府",
                year: "2024",
                description: "230万人の市民のための包括的デジタルサービスプラットフォーム",
            },
            {
                name: "市民参加ポータル",
                client: "複数の自治体",
                year: "2023",
                description: "統一市民参加プラットフォーム",
            },
        ],
        team: {
            leadership: "山本明子、クリエイティブディレクター",
            expertise: ["UX/UIデザイン", "フロントエンド開発", "アクセシビリティ", "ユーザーリサーチ"],
            certifications: ["Google UXデザイン", "Adobe認定エキスパート", "IAAPアクセシビリティ"],
        },
        contact: {
            email: "contact@webcraft.aegisllp.com",
            phone: "+81-75-1234-5679",
            website: "https://webcraft.aegisllp.com",
        },
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
    },
    "4": {
        id: "4",
        name: "モバイルファースト・テック",
        tagline: "政府向けモバイルイノベーション",
        specialization: "モバイル開発と市民アプリ",
        established: "2020",
        employees: "28+",
        headquarters: "日本、広島",
        description:
            "モバイルファースト・テックは、政府サービスを市民のスマートフォンに直接届ける最先端のモバイルアプリケーションを開発し、セキュリティ、パフォーマンス、ユーザーエンゲージメントに焦点を当てています。",
        mission:
            "安全でアクセシブル、ユーザーフレンドリーな革新的モバイルソリューションを通じて市民と政府のやり取りを革命的に変えます。",
        services: [
            {
                name: "市民モバイルアプリ",
                description: "政府サービスと市民参加のためのネイティブおよびクロスプラットフォームモバイルアプリケーション。",
                technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            },
            {
                name: "緊急対応システム",
                description: "モバイルデバイス向けのリアルタイム緊急アラートおよび対応システム。",
                technologies: ["Push Notifications", "GPS Integration", "Real-time Messaging", "Offline Capability"],
            },
            {
                name: "デジタルアイデンティティソリューション",
                description: "安全なモバイル本人確認および認証システム。",
                technologies: ["Biometric Authentication", "Blockchain", "OAuth 2.0", "Multi-factor Authentication"],
            },
        ],
        achievements: [
            "日本全国で300万人以上の市民が使用するアプリを開発",
            "アプリストア平均評価4.8/5を達成",
            "すべてのモバイルアプリケーションでセキュリティ侵害ゼロ",
            "2023年日本モバイルアプリ優秀賞受賞",
        ],
        projects: [
            {
                name: "広島緊急対応アプリ",
                client: "広島県",
                year: "2024",
                description: "280万人の市民を守るAI駆動緊急対応システム",
            },
            {
                name: "東京市民サービスアプリ",
                client: "東京都政府",
                year: "2023",
                description: "包括的市民サービスモバイルプラットフォーム",
            },
        ],
        team: {
            leadership: "中村健二、モバイル技術リード",
            expertise: ["モバイル開発", "セキュリティ", "ユーザーエクスペリエンス", "パフォーマンス最適化"],
            certifications: ["Appleデベロッパー", "Google Playコンソール", "React Native認定"],
        },
        contact: {
            email: "contact@mobilefirst.aegisllp.com",
            phone: "+81-82-1234-5679",
            website: "https://mobilefirst.aegisllp.com",
        },
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
    },
}

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
    const company = companies[params.id as keyof typeof companies]

    if (!company) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-50/30" />
                <div className="container mx-auto relative z-10">
                    <div>
                        <div className="mb-8">
                            <Link href="/companies" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                すべての企業に戻る
                            </Link>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Badge className="mb-6 bg-emerald-100 text-emerald-800">メンバー企業</Badge>
                                <h1 className="text-5xl font-bold text-slate-800 mb-4">{company.name}</h1>
                                <p className="text-2xl text-emerald-600 mb-6">{company.tagline}</p>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{company.description}</p>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">設立年</div>
                                        <div className="text-lg font-semibold text-slate-800">{company.established}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">チーム規模</div>
                                        <div className="text-lg font-semibold text-slate-800">{company.employees}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">本社</div>
                                        <div className="text-lg font-semibold text-slate-800">{company.headquarters}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">専門分野</div>
                                        <div className="text-lg font-semibold text-slate-800">{company.specialization}</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="relative  overflow-hidden shadow-2xl">
                                    <Image
                                        src={company.image || "/placeholder.svg"}
                                        alt={company.name}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/60" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                                        <p className="text-white/90">{company.tagline}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 px-4 bg-white/50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">
                            私たちのミッション
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {company.mission}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            私たちのサービス
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            政府機関や自治体向けに設計された専門的ソリューション
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {company.services.map((service, index) => (
                            <div key={index}>
                                <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-white/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="text-slate-800">{service.name}</CardTitle>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <div className="text-sm font-medium text-slate-700">技術:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {service.technologies.map((tech, i) => (
                                                    <Badge key={i} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            主な実績
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            政府技術ソリューションにおける測定可能な結果と認知
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {company.achievements.map((achievement, index) => (
                            <div key={index}>
                                <div className="flex items-start gap-3 p-6 bg-white  shadow-md">
                                    <Award className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                                    <p className="text-slate-700">{achievement}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Projects */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            最近のプロジェクト
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            最新の成功した実装をハイライト
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {company.projects.map((project, index) => (
                            <div key={index}>
                                <Card className="hover:shadow-lg transition-shadow border-0 shadow-md bg-white/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="outline">{project.year}</Badge>
                                            <div className="flex items-center gap-1 text-sm text-slate-500">
                                                <Calendar className="h-4 w-4" />
                                                <span>{project.year}</span>
                                            </div>
                                        </div>
                                        <CardTitle className="text-slate-800">{project.name}</CardTitle>
                                        <CardDescription>{project.client}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{project.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team & Leadership */}
            <section className="py-16 px-4 bg-white/50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                            チームと専門知識
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <Card className="border-0 shadow-md bg-white/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="text-slate-800">リーダーシップ</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Users className="h-5 w-5 text-emerald-600" />
                                            <span className="font-medium text-slate-800">{company.team.leadership}</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-sm font-medium text-slate-700">中核専門知識:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {company.team.expertise.map((skill, i) => (
                                                    <Badge key={i} variant="outline" className="text-xs">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <Card className="border-0 shadow-md bg-white/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="text-slate-800">認定資格</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {company.team.certifications.map((cert, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Award className="h-4 w-4 text-emerald-600" />
                                                    <span className="text-slate-700">{cert}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-800 mb-8">
                            お問い合わせ
                        </h2>

                        <div>
                            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-center gap-3">
                                            <Mail className="h-5 w-5 text-emerald-600" />
                                            <a href={`mailto:${company.contact.email}`} className="text-slate-700 hover:text-emerald-600">
                                                {company.contact.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-3">
                                            <Phone className="h-5 w-5 text-emerald-600" />
                                            <a href={`tel:${company.contact.phone}`} className="text-slate-700 hover:text-emerald-600">
                                                {company.contact.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-3">
                                            <Globe className="h-5 w-5 text-emerald-600" />
                                            <a
                                                href={company.contact.website}
                                                className="text-slate-700 hover:text-emerald-600"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                企業ウェブサイト <ExternalLink className="h-4 w-4 inline ml-1" />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-3">
                                            <MapPin className="h-5 w-5 text-emerald-600" />
                                            <span className="text-slate-700">{company.headquarters}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-200">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                            <Link href="/contact">イージスLLP経由でお問い合わせ</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-4 bg-slate-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <Link href="/companies" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            すべての企業
                        </Link>
                        <Link href="/projects" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                            私たちのプロジェクトを見る
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}