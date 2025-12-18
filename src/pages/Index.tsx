import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedSection, setSelectedSection] = useState('main');

  const mockGrades = [
    { subject: 'Математика', grades: [5, 4, 5, 5, 4], average: 4.6 },
    { subject: 'Русский язык', grades: [5, 5, 4, 5, 5], average: 4.8 },
    { subject: 'Физика', grades: [4, 4, 5, 4, 5], average: 4.4 },
    { subject: 'История', grades: [5, 5, 5, 4, 5], average: 4.8 },
  ];

  const mockHomework = [
    { subject: 'Математика', task: 'Решить задачи №45-52 из учебника', deadline: '20.12.2025', status: 'active' },
    { subject: 'Русский язык', task: 'Написать сочинение на тему "Зима"', deadline: '22.12.2025', status: 'active' },
    { subject: 'Физика', task: 'Подготовить доклад о законах Ньютона', deadline: '19.12.2025', status: 'urgent' },
  ];

  const news = [
    { title: 'Зимние каникулы 2025', date: '15.12.2025', text: 'Каникулы начнутся 28 декабря и продлятся до 10 января.' },
    { title: 'Олимпиада по математике', date: '10.12.2025', text: 'Школьный этап олимпиады состоится 25 декабря в актовом зале.' },
    { title: 'Новогодний концерт', date: '05.12.2025', text: 'Приглашаем всех на праздничный концерт 27 декабря в 18:00.' },
  ];

  const teachers = [
    { name: 'Иванова Мария Петровна', subject: 'Математика', experience: '15 лет', photo: 'https://cdn.poehali.dev/projects/98082e8e-35dc-41c4-8c66-079d3800d32f/files/5a9a42de-9b75-4150-af37-ef94e79c8d55.jpg' },
    { name: 'Петров Сергей Иванович', subject: 'Физика', experience: '12 лет', photo: 'https://cdn.poehali.dev/projects/98082e8e-35dc-41c4-8c66-079d3800d32f/files/5a9a42de-9b75-4150-af37-ef94e79c8d55.jpg' },
    { name: 'Сидорова Анна Викторовна', subject: 'Русский язык', experience: '18 лет', photo: 'https://cdn.poehali.dev/projects/98082e8e-35dc-41c4-8c66-079d3800d32f/files/5a9a42de-9b75-4150-af37-ef94e79c8d55.jpg' },
  ];

  const schedule = {
    'Понедельник': ['Математика', 'Русский язык', 'Физика', 'История', 'Английский язык'],
    'Вторник': ['Литература', 'Математика', 'Химия', 'Физкультура', 'Биология'],
    'Среда': ['Геометрия', 'Физика', 'Русский язык', 'География', 'ИЗО'],
    'Четверг': ['Алгебра', 'История', 'Английский язык', 'Информатика', 'Музыка'],
    'Пятница': ['Русский язык', 'Химия', 'Физкультура', 'Литература', 'ОБЖ'],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  МБОУ СОШ №126
                </h1>
                <p className="text-sm text-muted-foreground">Образование будущего</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-2">
              {['Главная', 'О школе', 'Родителям', 'Новости', 'Расписание', 'Контакты', 'Учителя'].map((item) => (
                <Button
                  key={item}
                  variant={selectedSection === item.toLowerCase().replace(' ', '-') ? 'default' : 'ghost'}
                  onClick={() => setSelectedSection(item.toLowerCase().replace(' ', '-'))}
                  className="transition-all hover:scale-105"
                >
                  {item}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="text-sm px-4 py-1 bg-gradient-to-r from-primary to-secondary">
                Современное образование
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Добро пожаловать в{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  МБОУ СОШ №126
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Мы создаём будущее через качественное образование, инновационные методики и заботу о каждом ученике
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Электронный дневник
                </Button>
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="https://cdn.poehali.dev/projects/98082e8e-35dc-41c4-8c66-079d3800d32f/files/9dae8eaf-6a9d-4eae-996e-77db8658c7ec.jpg"
                alt="Школа"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Users', title: '850+ учеников', desc: 'Активных и талантливых' },
              { icon: 'Award', title: '45 учителей', desc: 'Профессионалов своего дела' },
              { icon: 'TrendingUp', title: '98% поступление', desc: 'В ведущие ВУЗы страны' },
            ].map((stat, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all hover:scale-105 animate-scale-in border-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={stat.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-3xl font-bold">{stat.title}</CardTitle>
                  <CardDescription className="text-base">{stat.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-secondary to-accent text-white">
              Для учеников и родителей
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Электронный дневник</h2>
            <p className="text-xl text-muted-foreground">Следите за успеваемостью и домашними заданиями онлайн</p>
          </div>

          <Tabs defaultValue="grades" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 h-14">
              <TabsTrigger value="grades" className="text-base">
                <Icon name="BarChart3" className="mr-2" size={20} />
                Оценки
              </TabsTrigger>
              <TabsTrigger value="homework" className="text-base">
                <Icon name="BookMarked" className="mr-2" size={20} />
                Домашнее задание
              </TabsTrigger>
            </TabsList>

            <TabsContent value="grades" className="space-y-4 mt-6">
              {mockGrades.map((subject, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{subject.subject}</CardTitle>
                      <Badge
                        className={`text-lg px-4 py-1 ${
                          subject.average >= 4.5
                            ? 'bg-green-500'
                            : subject.average >= 4
                            ? 'bg-blue-500'
                            : 'bg-orange-500'
                        }`}
                      >
                        Средний балл: {subject.average}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      {subject.grades.map((grade, gradeIdx) => (
                        <div
                          key={gradeIdx}
                          className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg ${
                            grade === 5
                              ? 'bg-green-500'
                              : grade === 4
                              ? 'bg-blue-500'
                              : grade === 3
                              ? 'bg-orange-500'
                              : 'bg-red-500'
                          }`}
                        >
                          {grade}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="homework" className="space-y-4 mt-6">
              {mockHomework.map((hw, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon name="BookOpen" className="text-primary" size={24} />
                        <div>
                          <CardTitle className="text-lg">{hw.subject}</CardTitle>
                          <CardDescription>{hw.task}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={hw.status === 'urgent' ? 'destructive' : 'default'}>
                        {hw.status === 'urgent' ? (
                          <>
                            <Icon name="AlertCircle" className="mr-1" size={16} />
                            Срочно
                          </>
                        ) : (
                          'Активно'
                        )}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      Сдать до: {hw.deadline}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Новости школы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:scale-105 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши учителя</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachers.map((teacher, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all hover:scale-105 animate-scale-in">
                <CardHeader>
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
                  />
                  <CardTitle className="text-lg">{teacher.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">{teacher.subject}</CardDescription>
                  <p className="text-sm text-muted-foreground">Стаж: {teacher.experience}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Расписание уроков</h2>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              {Object.entries(schedule).map(([day, lessons], idx) => (
                <div key={idx}>
                  <div className="py-4">
                    <h3 className="text-xl font-bold mb-3 text-primary">{day}</h3>
                    <div className="grid grid-cols-5 gap-2">
                      {lessons.map((lesson, lessonIdx) => (
                        <div
                          key={lessonIdx}
                          className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-lg text-center hover:scale-105 transition-transform"
                        >
                          <div className="text-xs text-muted-foreground mb-1">{lessonIdx + 1} урок</div>
                          <div className="font-semibold text-sm">{lesson}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {idx < Object.entries(schedule).length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Контакты</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} />
                </div>
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-sm opacity-90">г. Москва, ул. Школьная, 126</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} />
                </div>
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-sm opacity-90">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={32} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm opacity-90">school126@edu.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">© 2025 МБОУ СОШ №126. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
