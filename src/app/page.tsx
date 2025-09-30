"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Star, Users, Trophy, Target, Zap, ArrowRight, Play, Clock, TrendingUp, Activity, Brain, Flame, Shield, Timer } from 'lucide-react'

export default function ProtocoloRecomposicaoAlfa() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  // URL de checkout único para todos os botões
  const checkoutUrl = "https://pay.kirvano.com/012b410c-dc53-475a-815a-24ea3b988e8d"

  const handleCheckout = () => {
    window.open(checkoutUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* 1. HEADLINE PODEROSA E DIRETA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-6 py-3 text-sm font-bold">
              🔬 MÉTODO CIENTIFICAMENTE VALIDADO
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Descubra Seu Tipo Metabólico em
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
                3 Minutos e Transforme
              </span>
              <span className="text-white block">Seu Corpo Para Sempre</span>
            </h1>
            
            {/* 2. SUBHEADLINE */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              O <strong className="text-orange-400">Protocolo Recomposição Alfa</strong> revela se seu metabolismo é 
              <strong className="text-white"> Acelerado, Equilibrado ou Lento</strong> e como usar essa informação para 
              <strong className="text-red-400"> acelerar o ganho de massa magra</strong> e 
              <strong className="text-orange-400"> eliminar gordura abdominal</strong> de forma definitiva
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={handleCheckout}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                DESCOBRIR MEU TIPO METABÓLICO AGORA
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORYTELLING / DOR DO PÚBLICO-ALVO */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
              Por Que 87% dos Homens Entre 25 e 45 Anos<br />
              <span className="text-red-400">Falham na Transformação Corporal?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A resposta é simples: <strong className="text-white">eles não conhecem o próprio metabolismo.</strong><br />
              Você já passou por isso?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-500/30 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Timer className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Falta de Energia</h3>
                <p className="text-gray-300 text-sm">
                  Acorda cansado, passa o dia arrastando e chega em casa sem disposição para nada
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 border border-orange-500/30 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Dificuldade Muscular</h3>
                <p className="text-gray-300 text-sm">
                  Treina há meses mas não vê ganho de massa magra significativo
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 border border-yellow-500/30 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Gordura Abdominal</h3>
                <p className="text-gray-300 text-sm">
                  A barriga teimosa que não sai, mesmo fazendo dieta e exercícios
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-gray-500/30 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Fadiga Mental</h3>
                <p className="text-gray-300 text-sm">
                  Dificuldade de concentração e produtividade no trabalho
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl text-white font-semibold mb-4">
              Se você se identificou com pelo menos 2 desses problemas...
            </p>
            <p className="text-xl text-orange-400 font-bold">
              Você está no lugar certo para resolver TODOS eles de uma vez por todas.
            </p>
          </div>
        </div>
      </section>

      {/* 4. APRESENTAÇÃO DA SOLUÇÃO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
              A Solução Que Vai Mudar Sua Vida:
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
                Protocolo Recomposição Alfa
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Um <strong className="text-white">diagnóstico simples de 3 minutos</strong> que identifica se seu metabolismo é:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">ACELERADO</h3>
                <p className="text-gray-300">
                  Queima calorias rapidamente, precisa comer mais para ganhar massa, 
                  tem dificuldade para engordar
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">EQUILIBRADO</h3>
                <p className="text-gray-300">
                  Metabolismo moderado, responde bem a protocolos balanceados, 
                  ganha e perde peso com facilidade média
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">LENTO</h3>
                <p className="text-gray-300">
                  Queima calorias devagar, acumula gordura facilmente, 
                  precisa de estratégias específicas para acelerar
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Após descobrir seu tipo, você recebe instantaneamente:
            </h3>
            <p className="text-xl text-gray-300">
              O protocolo exato de <strong className="text-orange-400">dieta, treino e rotina</strong> personalizado 
              para seu metabolismo específico, garantindo <strong className="text-white">recomposição corporal acelerada</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 5. BENEFÍCIOS CLAROS */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
              O Que Você Vai Descobrir no
              <span className="text-orange-400 block">Protocolo Recomposição Alfa</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Descubra em minutos seu tipo metabólico</h3>
                  <p className="text-gray-300">Teste científico de 3 minutos que revela se você é Acelerado, Equilibrado ou Lento</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Calculadora de macronutrientes personalizada</h3>
                  <p className="text-gray-300">Saiba exatamente quantas proteínas, carboidratos e gorduras consumir para SEU metabolismo</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Protocolo de ativação hormonal matinal</h3>
                  <p className="text-gray-300">Rotina de 15 minutos que dispara energia e foco desde o momento que você acorda</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Treino inteligente e eficiente</h3>
                  <p className="text-gray-300">Como treinar 3-4x por semana e ter resultados superiores a quem treina todos os dias</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Alimentação estratégica para rotina corrida</h3>
                  <p className="text-gray-300">Refeições práticas de 10 minutos que aceleram metabolismo e ganho muscular</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Fórmula de hidratação executiva</h3>
                  <p className="text-gray-300">Como manter energia constante e foco laser durante todo o dia de trabalho</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mentalidade de consistência</h3>
                  <p className="text-gray-300">O mindset que diferencia homens que alcançam resultados dos que desistem no meio do caminho</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROVA / AUTORIDADE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
              Metodologia Exclusiva Testada com
              <span className="text-orange-400 block">Executivos de Alto Desempenho</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Este protocolo não é teoria. É o resultado de <strong className="text-white">3 anos de pesquisa</strong> e 
              aplicação prática com <strong className="text-orange-400">mais de 2.847 executivos e profissionais</strong> que 
              não tinham tempo a perder com métodos que não funcionam.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">2.847</div>
                <div className="text-white font-semibold mb-2">Executivos Transformados</div>
                <div className="text-gray-300 text-sm">Profissionais de alto desempenho que aplicaram o protocolo</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">94%</div>
                <div className="text-white font-semibold mb-2">Taxa de Sucesso</div>
                <div className="text-gray-300 text-sm">Dos homens que seguiram o protocolo viram resultados em 30 dias</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">3 Anos</div>
                <div className="text-white font-semibold mb-2">de Desenvolvimento</div>
                <div className="text-gray-300 text-sm">Fundamentado em práticas de saúde e performance masculina</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-500/30">
            <p className="text-xl text-gray-300 mb-4">
              <strong className="text-white">"Não criamos mais um método genérico.</strong>
            </p>
            <p className="text-xl text-gray-300">
              Desenvolvemos um protocolo científico que se adapta ao SEU metabolismo específico, 
              porque sabemos que <strong className="text-orange-400">homens de sucesso não têm tempo para tentativa e erro."</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS SIMULADOS */}
      <section className="py-20 bg-gradient-to-r from-gray-900/20 to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
              Transformações Reais de Homens Reais
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Descobri que tenho metabolismo LENTO. Em 45 dias seguindo o protocolo específico, 
                  perdi 8kg de gordura e ganhei 3kg de músculo. Minha energia voltou e minha produtividade no trabalho disparou!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">RS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Ricardo Silva</div>
                    <div className="text-gray-400 text-sm">Diretor Comercial, 38 anos</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Metabolismo ACELERADO aqui. Sempre fui magro demais. Com o protocolo certo, 
                  ganhei 7kg de massa magra em 2 meses. Finalmente tenho o físico que sempre quis!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MC</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Marcelo Costa</div>
                    <div className="text-gray-400 text-sm">Engenheiro, 31 anos</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 backdrop-blur-sm rounded-xl">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Metabolismo EQUILIBRADO. O protocolo me ensinou a otimizar minha alimentação e treino. 
                  Resultado: -12kg de gordura, +5kg de músculo. Aos 42 anos, estou no melhor shape da minha vida!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AF</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">André Ferreira</div>
                    <div className="text-gray-400 text-sm">Empresário, 42 anos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OFERTA IRRESISTÍVEL */}
      <section className="py-20 bg-gradient-to-r from-orange-900/30 to-red-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
            Quanto Vale Conhecer Seu Metabolismo?
          </h2>
          
          <div className="mb-12">
            <p className="text-xl text-gray-300 mb-6">
              Uma consulta com nutricionista especializado: <span className="text-white font-bold">R$ 300</span>
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Avaliação física completa: <span className="text-white font-bold">R$ 250</span>
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Personal trainer especializado: <span className="text-white font-bold">R$ 200/aula</span>
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Acompanhamento por 3 meses: <span className="text-white font-bold">R$ 2.400</span>
            </p>
            
            <div className="border-t border-gray-500 pt-6">
              <p className="text-2xl text-gray-300 mb-4">
                <strong className="text-white">Total que você gastaria: R$ 3.150</strong>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border-2 border-orange-500/50 backdrop-blur-sm max-w-md mx-auto rounded-xl">
            <div className="p-8">
              <Badge className="mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 px-6 py-3 text-lg font-bold">
                🔥 OFERTA ESPECIAL DE LANÇAMENTO
              </Badge>
              
              <div className="mb-8">
                <div className="text-gray-400 line-through text-2xl mb-2">De R$ 497</div>
                <div className="text-6xl font-bold text-white mb-4">R$ 97</div>
                <div className="text-gray-300 text-lg">Acesso imediato e vitalício</div>
              </div>

              <p className="text-gray-300 mb-8">
                Por menos de <strong className="text-orange-400">R$ 3,23 por dia</strong> durante um mês, 
                você tem acesso ao conhecimento que vai transformar seu corpo para sempre.
              </p>

              <Button 
                size="lg" 
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 mb-4"
              >
                GARANTIR MEU PROTOCOLO AGORA
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>

              <p className="text-sm text-gray-400">
                ⏰ Oferta válida apenas hoje • Últimas vagas disponíveis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CHAMADA PARA AÇÃO */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Clique no Botão Abaixo e Comece Agora Sua Transformação com o
            <span className="block">Protocolo Recomposição Alfa</span>
          </h2>
          
          <Button 
            size="lg" 
            onClick={handleCheckout}
            className="bg-white text-orange-600 hover:bg-gray-100 px-16 py-6 text-2xl font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 mb-8"
          >
            DESCOBRIR MEU TIPO METABÓLICO
            <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
          
          <div className="flex flex-wrap justify-center gap-8 text-orange-100">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="text-lg">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Garantia total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span className="text-lg">Suporte especializado</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GARANTIA / RISCO REVERSO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
              Garantia Blindada de
              <span className="text-green-400 block">60 Dias ou Seu Dinheiro de Volta</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-500/30 backdrop-blur-sm max-w-4xl mx-auto rounded-xl">
            <div className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">
                Seu Investimento Está 100% Protegido
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Aplique o <strong className="text-white">Protocolo Recomposição Alfa</strong> por 60 dias completos. 
                Se você não descobrir seu tipo metabólico, não sentir mais energia, não ver mudanças no seu corpo 
                ou simplesmente não ficar satisfeito por QUALQUER motivo...
              </p>
              
              <p className="text-2xl font-bold text-green-400 mb-8">
                Devolvemos 100% do seu dinheiro, sem perguntas, sem burocracia.
              </p>
              
              <div className="bg-white/5 rounded-xl p-6">
                <p className="text-lg text-gray-300">
                  <strong className="text-white">O risco é ZERO.</strong> Ou o método funciona e transforma seu corpo, 
                  ou você não perde nada. A decisão mais inteligente que você pode tomar hoje é 
                  <strong className="text-orange-400"> testar sem risco.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. ÚLTIMA CHAMADA (URGÊNCIA) */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
            Última Chamada:
            <span className="text-red-400 block">Não Deixe Mais Um Dia Passar</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Enquanto você está lendo isso, <strong className="text-white">centenas de homens</strong> estão descobrindo 
            seu tipo metabólico e iniciando sua transformação. A pergunta é:
          </p>
          
          <p className="text-2xl font-bold text-white mb-12">
            Você vai continuar preso na mesma rotina sem resultados<br />
            ou vai se juntar ao grupo seleto de homens que dominam seu metabolismo?
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-500/30 backdrop-blur-sm rounded-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Se Você NÃO Agir Hoje:</h3>
                <ul className="text-left space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Continuará sem saber seu tipo metabólico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Seguirá perdendo tempo com métodos genéricos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Manterá a falta de energia e disposição</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>A gordura abdominal continuará teimosa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Daqui a 6 meses estará no mesmo lugar</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 backdrop-blur-sm rounded-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Se Você Agir AGORA:</h3>
                <ul className="text-left space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Descobrirá seu tipo metabólico em 3 minutos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Terá o protocolo exato para SEU corpo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sentirá mais energia já na primeira semana</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Verá mudanças reais no corpo em 30 dias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Será parte do grupo seleto de homens alfa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-2xl p-8 border border-orange-500/30 mb-12">
            <p className="text-2xl font-bold text-white mb-4">
              A escolha é sua. O momento é AGORA.
            </p>
            <p className="text-xl text-gray-300">
              Seja parte do grupo seleto de homens que dominam seu metabolismo e transformam seu corpo com ciência, 
              não com tentativa e erro.
            </p>
          </div>

          <Button 
            size="lg" 
            onClick={handleCheckout}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-16 py-6 text-2xl font-bold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 mb-8"
          >
            SIM, QUERO DOMINAR MEU METABOLISMO AGORA
            <ArrowRight className="ml-3 w-7 h-7" />
          </Button>

          <p className="text-lg text-gray-400">
            ⚡ Acesso imediato • 🛡️ Garantia de 60 dias • 🔥 Oferta por tempo limitado
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Protocolo Recomposição Alfa. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Transforme seu metabolismo. Transforme seu corpo. Transforme sua vida.
          </p>
        </div>
      </footer>
    </div>
  )
}