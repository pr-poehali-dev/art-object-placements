import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const artObjects = [
  {
    id: 1,
    title: 'Абстрактные формы',
    artist: 'Художник 1',
    location: 'Москва, Парк Горького',
    image: 'https://cdn.poehali.dev/projects/cc31519e-7f9d-4045-8277-ba44245488c5/files/0f9a5242-517b-4f27-81f7-b252b32b1766.jpg',
    description: 'Современная абстрактная скульптура с геометрическими формами'
  },
  {
    id: 2,
    title: 'Городской акцент',
    artist: 'Художник 2',
    location: 'Санкт-Петербург, Невский проспект',
    image: 'https://cdn.poehali.dev/projects/cc31519e-7f9d-4045-8277-ba44245488c5/files/c9653383-4fc6-4081-b28b-f59f22ed5f2c.jpg',
    description: 'Яркий уличный арт-объект в современном стиле'
  },
  {
    id: 3,
    title: 'Световая инсталляция',
    artist: 'Художник 3',
    location: 'Казань, Центральная площадь',
    image: 'https://cdn.poehali.dev/projects/cc31519e-7f9d-4045-8277-ba44245488c5/files/9a1d76b6-f2e3-48fe-a245-bac395454e87.jpg',
    description: 'Интерактивная световая инсталляция с футуристичным дизайном'
  }
];

const mapLocations = [
  { id: 1, name: 'Москва, Парк Горького', lat: 55.7308, lng: 37.6017 },
  { id: 2, name: 'Санкт-Петербург, Невский проспект', lat: 59.9343, lng: 30.3351 },
  { id: 3, name: 'Казань, Центральная площадь', lat: 55.7887, lng: 49.1221 },
  { id: 4, name: 'Екатеринбург, Плотинка', lat: 56.8389, lng: 60.6057 },
  { id: 5, name: 'Новосибирск, Красный проспект', lat: 55.0084, lng: 82.9357 }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artTitle: '',
    description: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      artTitle: '',
      description: '',
      location: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ART OBJECTS GALLERY</h1>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setActiveSection('home')} className="text-sm font-medium hover:text-accent transition-colors">Главная</button>
            <button onClick={() => setActiveSection('gallery')} className="text-sm font-medium hover:text-accent transition-colors">Галерея</button>
            <button onClick={() => setActiveSection('map')} className="text-sm font-medium hover:text-accent transition-colors">Карта</button>
            <button onClick={() => setActiveSection('submit')} className="text-sm font-medium hover:text-accent transition-colors">Подать заявку</button>
            <button onClick={() => setActiveSection('contact')} className="text-sm font-medium hover:text-accent transition-colors">Контакты</button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <>
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="container mx-auto px-4 text-center z-10">
                <h2 className="text-6xl md:text-7xl font-bold mb-6 text-primary">
                  Искусство в <br />городском пространстве
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Откройте новые грани уличного искусства. Разместите свой арт-объект в самых знаковых местах города
                </p>
                <Button onClick={() => setActiveSection('submit')} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Подать заявку
                </Button>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-16">Последние работы</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {artObjects.map((art) => (
                    <Card key={art.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={art.image} 
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-2xl font-bold mb-2">{art.title}</h4>
                        <p className="text-muted-foreground mb-2">{art.artist}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="MapPin" size={16} />
                          <span>{art.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'gallery' && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-5xl font-bold text-center mb-8">Галерея арт-объектов</h3>
              <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
                Коллекция современных инсталляций в городских пространствах
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artObjects.map((art) => (
                  <Card key={art.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={art.image} 
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-2xl font-bold mb-2">{art.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{art.artist}</p>
                      <p className="text-sm mb-4">{art.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span>{art.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'map' && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-5xl font-bold text-center mb-8">Интерактивная карта мест</h3>
              <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
                Выберите идеальное место для размещения вашего арт-объекта
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                      <div className="text-center">
                        <Icon name="Map" size={64} className="mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">Интерактивная карта</p>
                        <p className="text-sm text-muted-foreground mt-2">Нажмите на маркер, чтобы выбрать место</p>
                      </div>
                    </div>
                    {mapLocations.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => setSelectedLocation(location.name)}
                        className="absolute w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform cursor-pointer"
                        style={{
                          left: `${(location.id * 15) + 10}%`,
                          top: `${(location.id * 12) + 15}%`
                        }}
                      >
                        <Icon name="MapPin" size={16} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold mb-6">Доступные локации</h4>
                  {mapLocations.map((location) => (
                    <Card 
                      key={location.id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${selectedLocation === location.name ? 'ring-2 ring-accent' : ''}`}
                      onClick={() => setSelectedLocation(location.name)}
                    >
                      <CardContent className="p-4 flex items-center gap-3">
                        <Icon name="MapPin" size={20} className="text-accent" />
                        <div>
                          <p className="font-medium">{location.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {selectedLocation && (
                    <div className="pt-4">
                      <Button 
                        onClick={() => {
                          setFormData({...formData, location: selectedLocation});
                          setActiveSection('submit');
                        }}
                        className="w-full bg-accent hover:bg-accent/90"
                      >
                        Подать заявку для этого места
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'submit' && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-2xl">
              <h3 className="text-5xl font-bold text-center mb-8">Форма подачи заявки</h3>
              <p className="text-center text-muted-foreground mb-16 text-lg">
                Заполните форму, и мы свяжемся с вами для обсуждения деталей
              </p>
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        placeholder="ivan@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="artTitle">Название арт-объекта *</Label>
                      <Input
                        id="artTitle"
                        value={formData.artTitle}
                        onChange={(e) => setFormData({...formData, artTitle: e.target.value})}
                        required
                        placeholder="Моя инсталляция"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Описание проекта *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        required
                        placeholder="Расскажите о вашем арт-объекте, его концепции и технических особенностях"
                        rows={5}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Предпочитаемая локация</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="Выберите на карте или укажите вручную"
                      />
                      <Button 
                        type="button"
                        variant="outline" 
                        onClick={() => setActiveSection('map')}
                        className="w-full"
                      >
                        <Icon name="Map" size={16} className="mr-2" />
                        Выбрать на карте
                      </Button>
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <h3 className="text-5xl font-bold text-center mb-8">Контакты</h3>
              <p className="text-center text-muted-foreground mb-16 text-lg">
                Свяжитесь с нами любым удобным способом
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8 flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Email</h4>
                      <p className="text-muted-foreground">info@artgallery.ru</p>
                      <p className="text-muted-foreground">support@artgallery.ru</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Адрес</h4>
                      <p className="text-muted-foreground">Москва, ул. Арбат, д. 15</p>
                      <p className="text-muted-foreground">Офис 301</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Часы работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00</p>
                      <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">ART OBJECTS GALLERY</h4>
              <p className="text-primary-foreground/80">
                Платформа для размещения арт-объектов в городском пространстве
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Навигация</h5>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('home')} className="text-primary-foreground/80 hover:text-primary-foreground">Главная</button></li>
                <li><button onClick={() => setActiveSection('gallery')} className="text-primary-foreground/80 hover:text-primary-foreground">Галерея</button></li>
                <li><button onClick={() => setActiveSection('map')} className="text-primary-foreground/80 hover:text-primary-foreground">Карта</button></li>
                <li><button onClick={() => setActiveSection('submit')} className="text-primary-foreground/80 hover:text-primary-foreground">Подать заявку</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Социальные сети</h5>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Art Objects Gallery. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}