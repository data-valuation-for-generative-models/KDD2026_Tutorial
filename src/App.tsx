import { Mail } from "lucide-react"

import bannerImage from "@/assets/banner.png"
import universitiesImage from "@/assets/universities.png"
import avatarBingxueZhang from "@/assets/avatars/Bingxue Zhang.jpg"
import avatarFeidaZhu from "@/assets/avatars/Feida Zhu.jpg"
import avatarZhenzheZheng from "@/assets/avatars/Zhenzhe Zheng.png"
import avatarJianPei from "@/assets/avatars/Jian Pei.jpg"
import avatarYangShi from "@/assets/avatars/Yang Shi.jpg"
import avatarChengyuZhang from "@/assets/avatars/Chengyu Zhang.png"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sections = [
  { label: "Abstract", href: "#abstract" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tutorial Outline", href: "#outline" },
  { label: "Presenters", href: "#presenters" },
  { label: "Contributors", href: "#contributors" },
  { label: "Contact", href: "#contact" },
]

const scheduleRows = [
  {
    title: "Introduction",
    speaker: "Jian Pei",
    time: "30 minutes",
  },
  {
    title: "Step 1: Defining Value",
    speaker: "Zhenzhe Zheng",
    time: "30 minutes",
  },
  {
    title: "Step2: Computing Value",
    speaker: "Zhenzhe Zheng",
    time: "30 minutes",
  },
  {
    title: "Step3: Refining Value",
    speaker: "Bingxue Zhang",
    time: "30 minutes",
  },
  {
    title: "Step4: Distributing Value",
    speaker: "Feida Zhu",
    time: "30 minutes",
  },
  {
    title: "Summary",
    speaker: "Jian Pei",
    time: "30 minutes",
  },
]

const outlineSections = [
  {
    title: "Introduction",
    items: [
      {
        label: "Data Valuation",
      },
      {
        label: "Generative AI",
      },
      {
        label: "Why Data Valuation Matters for Generative AI",
      },
      {
        label: "Challenges",
        points: [
          "Data Valuation Measures in Generative Tasks",
          "Scalable Data Valuation in Generative Tasks",
          "Data Valuation across Value Propagation Stages",
          "From Data Valuation to Fair and Trustworthy Rewards ",
        ],
      },
      {
        label: "A Four-step Framework ",
      },
    ],
  },
  {
    title: "Step 1: Defining Value",
    items: [
      {
        label: "Design Ideas",
        points: [
          "From Discriminative to Generative Quality",
          "From Objective to Human Perception",
        ],
      },
      {
        label: "Major Approaches",
        points: [
          "Probabilistic & Distribution-based Methods",
          "Perceptual & Semantic Similarity Methods",
        ],
      },
      {
        label: "Future Directions",
      },
    ],
  },
  {
    title: "Step 2: Computing Value",
    items: [
      {
        label: "Design Ideas",
        points: [
          "Beyond Brute-force Retraining",
          "Beyond Hessian Matrix Calculations",
        ],
      },
      {
        label: "Major Approaches",
        points: [
          "Training-efficient Valuation Methods",
          "Second-order-free Attribution Methods",
        ],
      },
      {
        label: "Future Directions",
      },
    ],
  },
  {
    title: "Step 3: Refining Value",
    items: [
      {
        label: "Design Ideas",
        points: [
          "From Static to Dynamic Attribution",
          "From Single-stage to Multi-stage Tracking",
        ],
      },
      {
        label: "Major Approaches",
        points: [
          "Timestep-aware Attribution Methods",
          "Stage-decoupled Attribution Methods",
        ],
      },
      {
        label: "Future Directions",
      },
    ],
  },
  {
    title: "Step 4: Distributing Value",
    items: [
      {
        label: "Design Ideas",
        points: ["Beyond Theoretical Fairness", "Beyond Valuation Scores"],
      },
      {
        label: "Major Approaches",
        points: [
          "Manipulation-resistant Allocation Methods",
          "Trustworthy Settlement Methods",
        ],
      },
      {
        label: "Future Directions",
      },
    ],
  },
  {
    title: "Summary",
    items: [
      { label: "Challenges and Approaches Recap" },
      {
        label: "Roadmap for Future Directions",
      },
    ],
  },
]

const presenters = [
  {
    name: "Bingxue Zhang",
    image: avatarBingxueZhang,
    description:
      "received her Ph.D. from Ecole Centrale de Lyon, France. She is an associate professor at the University of Shanghai for Science and Technology. Her research actively explores blockchain technology, human-computer interaction, and data analytics, with a particular interest in AIGC applications. She has served as a Visiting Research Associate Professor at the National University of Singapore, participating in national-level projects on AI-driven finance and blockchain scalability. She has also served the academic community in roles such as Associate General Chair and Publicity Chair for conferences such as DASFAA, KDD, etc.",
  },
  {
    name: "Dr. Feida Zhu",
    image: avatarFeidaZhu,
    description:
      "is an associate professor and the associate dean of the School of Computing and Information Systems at Singapore Management University (SMU). His research centers on large-scale data mining and machine learning, with a particular focus on data asset, governance, and pricing, aiming to advance their applications in business, finance, and consumer innovation. He has led impactful academic service roles, serving as the General Co-Chair for two premier data conferences: SIGKDD 2021 in Singapore and IEEE ICDM 2018—one of the most successful editions in its history. At SMU, he has also provided academic direction for several analytics labs, translating research into practical business solutions.",
  },
  {
    name: "Dr. Zhenzhe Zheng",
    image: avatarZhenzheZheng,
    description:
      "is a Professor at Shanghai Jiao Tong University. His research focuses on the intersection of economics, learning, and systems, with a particular interest in game theory, machine learning, mobile computing, and their applications in Agentic AI systems. He obtained his Ph.D. from Shanghai Jiao Tong University and conducted research as a visiting scholar and postdoctoral researcher at the University of Illinois Urbana-Champaign. He has received several prestigious awards, including the China Computer Federation Excellent Doctoral Dissertation Award, the Google PhD Fellowship, and the Microsoft Research Asia PhD Fellowship. He actively contributes to the academic community by serving on the Technical Program Committees of ACM MobiHoc, ACM SIGKDD, IJCAI, etc.",
  },
  {
    name: "Dr. Jian Pei",
    image: avatarJianPei,
    description:
      "is a professor at Duke University. He is a leading researcher in the general areas of data science, big data, data mining, and database systems. His expertise is on developing effective and efficient data analysis techniques for data-intensive applications. He is recognized as a Fellow of ACM for his “contributions to the foundation, methodology and applications of data mining” and as a Fellow of IEEE for his “contributions to data mining and knowledge discovery”. He was Chair of SIGKDD. Dr. Jian Pei has been the General Co-Chairs and PC Chairs of a good number of top conferences including KDD, VLDB, ICDM, etc.",
  },
]

const contributors = [
  {
    name: "Yang Shi",
    image: avatarYangShi,
    description:
      "is a PhD student in Control Science and Engineering at the School of Optical-Electrical and Computer Engineering, University of Shanghai for Science and Technology. His research interests include generative AI technologies, data valuation, and blockchain systems. He has served as a Web Co-Chair for DASFAA 2025.",
  },
  {
    name: "Chengyu Zhang",
    image: avatarChengyuZhang,
    description:
      "is a Master’s student at the School of Optical-Electrical and Computer Engineering, University of Shanghai for Science and Technology, supervised by Dr. Bingxue Zhang. His research interests primarily focus on data valuation and data selection.",
  },
]

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="mt-3 text-3xl font-semibold text-balance md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight transition-colors hover:text-muted-foreground"
          >
            Home
          </a>

          <NavigationMenu viewport={false} className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {sections.map((section) => (
                <NavigationMenuItem key={section.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={section.href}
                      className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {section.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex min-w-0 items-center gap-2 md:hidden">
            <nav className="flex gap-2 overflow-x-auto">
              {sections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="rounded-lg px-2 py-1 text-xs font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {section.label}
                </a>
              ))}
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="border-b bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <img
              src={universitiesImage}
              alt="Participating universities"
              className="h-auto w-full rounded-lg object-contain"
            />
          </div>
        </section>

        <section
          className="relative isolate overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          {/*<div className="absolute inset-0 -z-10 bg-black/5" />*/}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.20),rgba(0,0,0,0),rgba(0,0,0,0.12))]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-30 bg-[linear-gradient(to_bottom,transparent,var(--background))]" />
          <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <p className="text-base font-semibold tracking-[0.2em] text-white uppercase text-shadow-lg">
                KDD’26 Tutorial
              </p>
              <h1 className="mt-5 text-5xl font-semibold text-balance text-shadow-lg md:text-7xl">
                Data Valuation for Generative Models
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white text-shadow-lg md:text-xl">
                Sunday, August 9, 2026 8:00 AM~12:00 PM
              </p>
              {/*<Button asChild size="lg" className="mt-8 h-11 px-4">*/}
              {/*  <a href="#abstract">*/}
              {/*    Button Label*/}
              {/*    <ArrowRight />*/}
              {/*  </a>*/}
              {/*</Button>*/}
            </div>
          </div>
        </section>

        <section id="abstract" className="scroll-mt-24 border-b">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeader title="Abstract" />
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                The rapid advancement of generative AI has fundamentally shifted
                machine learning from a discriminative paradigm to a generative
                one. This shift has rendered traditional data valuation methods,
                predominantly designed for discriminative models, inadequate for
                assessing the value of data in generative tasks. The field now
                faces four fundamental challenges: (1) Comprehensive data
                valuation measures customized for generative AI tasks, (2)
                Scalable data valuation adapted to the complexity of generative
                models, (3) Coherent data valuation aligned across all value
                propagation stages, and (4) Practical data valuation mechanisms
                for fair and trustworthy rewards. To address these challenges,
                this tutorial presents the first systematic synthesis of
                emerging solutions, organized around a four-step framework:
                defining value through generative utility functions, computing
                value with scalable algorithms, refining value via temporal and
                multi-stage attribution, and distributing value through
                trustworthy incentive mechanisms. For each step, we present the
                key design ideas, review cutting-edge approaches, and outline
                future directions. Our goal is to equip participants with a
                structured understanding of this rapidly evolving landscape. By
                the end of the tutorial, attendees will gain a clear grasp of
                the four fundamental challenges, a practical understanding of
                the major solution families, and a vision for future research
                toward a unified data valuation framework for the generative AI
                economy.
              </p>
            </div>
          </div>
        </section>

        <section id="schedule" className="scroll-mt-24 border-b bg-muted/25">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader title="Schedule" />
            <div className="mt-10 overflow-hidden rounded-lg border bg-background shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="w-[46%] px-5 py-4">Title</TableHead>
                    <TableHead className="px-5 py-4">Speaker</TableHead>
                    <TableHead className="px-5 py-4">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduleRows.map((row, index) => (
                    <TableRow key={`${row.title}-${index}`}>
                      <TableCell className="px-5 py-5 text-base font-medium">
                        {row.title}
                      </TableCell>
                      <TableCell className="px-5 py-5 text-base">
                        {row.speaker}
                      </TableCell>
                      <TableCell className="px-5 py-5 text-base">
                        {row.time}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section id="outline" className="scroll-mt-24 border-b">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader title="Tutorial Outline" />
            <div className="mt-10 flex flex-col gap-6">
              {outlineSections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
                >
                  <h3 className="text-2xl font-semibold">{section.title}</h3>
                  <ol className="mt-5 list-decimal space-y-5 pl-5 text-base leading-7">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <span className="font-medium">{item.label}</span>
                        {item.points && (
                          <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                            {item.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="presenters" className="scroll-mt-24 border-b bg-muted/25">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader title="Presenters" />
            <div className="mt-10 flex flex-col gap-12">
              {presenters.map((presenter) => (
                <article key={`${presenter.name}`} className="flex gap-6">
                  <img
                    src={presenter.image}
                    alt={presenter.name}
                    className="h-48 w-48 rounded-lg object-cover"
                  />
                  <div className="text-base">
                    <b className="font-semibold">{presenter.name}</b>
                    <span className="leading-7 text-muted-foreground">
                      {" "}
                      {presenter.description}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contributors"
          className="scroll-mt-24 border-b bg-muted/25"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader title="Contributors" />
            <div className="mt-10 flex flex-col gap-12">
              {contributors.map((presenter) => (
                <article key={`${presenter.name}`} className="flex gap-6">
                  <img
                    src={presenter.image}
                    alt={presenter.name}
                    className="h-48 w-48 rounded-lg object-cover"
                  />
                  <div className="text-base">
                    <b className="font-semibold">{presenter.name}</b>
                    <span className="leading-7 text-muted-foreground">
                      {" "}
                      {presenter.description}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeader title="Contact" />
            <div className="text-base leading-8 text-muted-foreground">
              <p>
                For any questions regarding this tutorial, please reach out to
                Bingxue Zhang via{" "}
                <a
                  href="mailto:zhangbingxue@usst.edu.cn"
                  className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
                >
                  <Mail className="size-4" />
                  zhangbingxue@usst.edu.cn
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
