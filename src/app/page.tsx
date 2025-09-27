"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Star, Users, Trophy, Target, Zap, ArrowRight, Play, Clock, TrendingUp } from 'lucide-react'

export default function FitnessAppLanding() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 text-sm font-semibold">
              🔥 MAIS DE 50.000 PESSOAS JÁ TRANSFORMARAM SEUS CORPOS
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme Seu Corpo em
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                90 Dias ou Menos
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              O único aplicativo que você precisa para <strong className="text-white">perder peso</strong> e 
              <strong className="text-white"> ganhar massa muscular</strong> ao mesmo tempo, 
              com planos personalizados por IA
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                COMEÇAR TRANSFORMAÇÃO AGORA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Como Funciona
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Sem mensalidades</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Resultados em 30 dias</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Garantia de 60 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Usuários Ativos</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">15kg</div>
              <div className="text-gray-400">Média de Perda</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-gray-400">Avaliação App</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-gray-400">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Cansado de Tentar e Não Ver Resultados?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A maioria das pessoas falha porque não tem um plano personalizado. 
              Nossa IA cria o programa perfeito para SEU corpo e SEU estilo de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Sem Plano Personalizado</h3>
                <p className="text-gray-300">
                  Treinos genéricos que não consideram seu biotipo, disponibilidade e objetivos específicos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Falta de Consistência</h3>
                <p className="text-gray-300">
                  Sem acompanhamento diário e motivação constante, é fácil desistir nos primeiros obstáculos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Resultados Lentos</h3>
                <p className="text-gray-300">
                  Métodos ultrapassados que demoram meses para mostrar mudanças visíveis no corpo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Como Nosso App Resolve Tudo Isso
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tecnologia de ponta combinada com ciência do exercício para resultados garantidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">IA Personalizada</h3>
                <p className="text-gray-300">
                  Algoritmo avançado que analisa seu corpo, histórico e objetivos para criar o plano perfeito
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Treinos Eficientes</h3>
                <p className="text-gray-300">
                  Sessões de 20-45 minutos que maximizam queima de gordura e ganho muscular simultaneamente
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Comunidade Ativa</h3>
                <p className="text-gray-300">
                  Suporte 24/7 de coaches certificados e comunidade de pessoas com os mesmos objetivos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Nutrição Inteligente</h3>
                <p className="text-gray-300">
                  Planos alimentares adaptativos que se ajustam aos seus resultados e preferências
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Acompanhamento Real</h3>
                <p className="text-gray-300">
                  Métricas detalhadas, fotos de progresso e ajustes automáticos baseados nos seus resultados
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Garantia Total</h3>
                <p className="text-gray-300">
                  60 dias para testar. Se não ver resultados, devolvemos 100% do seu investimento
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Transformações Reais de Pessoas Reais
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Perdi 18kg em 3 meses e ganhei músculos que nunca pensei que conseguiria. 
                  O app é viciante de tão bom!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MC</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Maria Clara</div>
                    <div className="text-gray-400 text-sm">Perdeu 18kg em 90 dias</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Finalmente um app que funciona! Ganho muscular visível em 6 semanas. 
                  Meus amigos não acreditam na transformação."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">RS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Rafael Santos</div>
                    <div className="text-gray-400 text-sm">Ganhou 8kg de massa magra</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Aos 45 anos consegui o corpo que sempre quis. O app se adapta à minha rotina corrida. 
                  Recomendo para todos!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AL</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Ana Luiza</div>
                    <div className="text-gray-400 text-sm">Transformação aos 45 anos</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Oferta Especial por Tempo Limitado
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Mais de 50.000 pessoas já transformaram seus corpos. Seja a próxima!
          </p>

          <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-8">
              <Badge className="mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 px-4 py-2">
                🔥 DESCONTO DE 70%
              </Badge>
              
              <div className="mb-6">
                <div className="text-gray-400 line-through text-2xl mb-2">De R$ 297</div>
                <div className="text-5xl font-bold text-white mb-2">R$ 97</div>
                <div className="text-gray-300">Pagamento único • Acesso vitalício</div>
              </div>

              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Planos personalizados por IA
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Treinos para casa e academia
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Nutrição inteligente adaptativa
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Suporte de coaches 24/7
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Comunidade exclusiva
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Garantia de 60 dias
                </li>
              </ul>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                GARANTIR MINHA TRANSFORMAÇÃO
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-sm text-gray-400 mt-4">
                ⏰ Oferta válida apenas hoje • Últimas vagas disponíveis
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Sua Transformação Começa Agora
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Não deixe mais um dia passar sem dar o primeiro passo para o corpo dos seus sonhos. 
            Milhares já conseguiram, agora é sua vez!
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 mb-6"
          >
            COMEÇAR MINHA JORNADA AGORA
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 text-purple-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Sem risco • Garantia total</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Resultados em 30 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Suporte especializado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 FitTransform AI. Todos os direitos reservados. 
            Transforme seu corpo com tecnologia de ponta.
          </p>
        </div>
      </footer>
    </div>
  )
}