import { ReactNode } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/ui/Container'

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <Header />
      <main className="flex-grow w-full">
        <Container className="py-section sm:py-section">
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}
