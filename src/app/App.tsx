import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Plane, 
  Hotel, 
  Coffee, 
  MapPin, 
  AlertCircle, 
  Camera, 
  Users, 
  Award,
  Sparkles,
  Globe,
  Clock,
  CreditCard,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [formVisible, setFormVisible] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('enrollment-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
    setFormVisible(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const programItems = [
    {
      icon: Plane,
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      benefit: 'Уверенность уже в первые часы за границей.'
    },
    {
      icon: Hotel,
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      benefit: 'Практика вежливых фраз и повседневной лексики.'
    },
    {
      icon: Coffee,
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      benefit: 'Развитие гастрономического словаря и уверенности в общении.'
    },
    {
      icon: MapPin,
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      benefit: 'Понимание устной речи и произношения в реальных ситуациях.'
    },
    {
      icon: AlertCircle,
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      benefit: 'Важные фразы, которые могут спасти отпуск.'
    },
    {
      icon: Camera,
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      benefit: 'Погружение в культурный контекст через язык.'
    },
    {
      icon: Users,
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      benefit: 'Игровая практика диалогов и неформального общения.'
    },
    {
      icon: Award,
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      benefit: 'Развитие связной речи и творческого самовыражения.'
    }
  ];

  const features = [
    'Акцент на практическую, живую речь, а не на грамматику ради грамматики',
    'Все ситуации — из реальной жизни путешественника',
    'Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты',
    'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16 sm:pb-24">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-amber-500/20 border border-teal-500/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300">Новый набор открыт!</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-teal-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              Курс «Английский для путешествий»
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
              в отпуске, поездках и будущих путешествиях!
            </p>

            <motion.button
              onClick={scrollToForm}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-400 hover:to-amber-400 rounded-full shadow-lg shadow-teal-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Записаться на курс
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* For Whom Section */}
      <section className="py-12 sm:py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <h2 className="text-3xl sm:text-4xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Для кого курс
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl mb-2 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                  Первая группа
                </div>
                <p className="text-gray-300">4–5 класс</p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl mb-2 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  Вторая группа
                </div>
                <p className="text-gray-300">6–8 класс</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Globe className="w-8 h-8 text-teal-400" />
              <h2 className="text-3xl sm:text-4xl bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
                Программа курса
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {programItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-amber-500/20 border border-teal-500/30">
                        <Icon className="w-6 h-6 text-teal-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2 text-amber-300">{item.title}</h3>
                        <p className="text-gray-400 mb-3">{item.description}</p>
                        <div className="flex items-start gap-2">
                          <span className="text-teal-400 mt-1">👉</span>
                          <p className="text-gray-300">{item.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-12 sm:py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <h2 className="text-3xl sm:text-4xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Почему этот курс особенный?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700/50"
          >
            <h2 className="text-3xl mb-6 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
              💻 Что потребуется
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-teal-400">•</span>
                <span>Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-400">•</span>
                <span>Стабильный интернет и Zoom</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Schedule and Pricing Section */}
      <section className="py-12 sm:py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-teal-400" />
                <h2 className="text-3xl bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                  Расписание
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <div className="text-lg text-teal-300 mb-1">Четверг, 15:00 (МСК)</div>
                  <p className="text-gray-400">группа 4–5 класс</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <div className="text-lg text-teal-300 mb-1">Пятница, 15:30 (МСК)</div>
                  <p className="text-gray-400">группа 6–8 класс</p>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-8 h-8 text-amber-400" />
                <h2 className="text-3xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Стоимость
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/50 border-2 border-amber-500/30">
                  <div className="text-lg text-amber-300 mb-1">Полный курс (10 уроков)</div>
                  <div className="text-3xl text-white">12 000 руб</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <div className="text-lg text-amber-300 mb-1">Абонемент</div>
                  <div className="text-3xl text-white">1 300 руб / урок</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20" id="enrollment-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-teal-500/30 shadow-2xl shadow-teal-500/20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 mb-6">
              <AlertCircle className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Места ограничены!</span>
            </div>

            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-teal-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              📢 Набор открыт!
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>

            <p className="text-xl text-gray-200 mb-8">
              👉 Запишитесь сейчас — и следующее путешествие станет первым, 
              где ваш ребёнок заговорит по-английски без страха!
            </p>

            <motion.button
              onClick={() => {
                alert('Спасибо за интерес! В реальной версии здесь будет форма записи или ссылка на регистрацию.');
              }}
              className="px-10 py-5 bg-gradient-to-r from-teal-500 via-amber-500 to-orange-500 hover:from-teal-400 hover:via-amber-400 hover:to-orange-400 rounded-full shadow-xl shadow-amber-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Записаться на курс
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© 2025 Курс «Английский для путешествий». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
