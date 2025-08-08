# TechData USA - Contratos de API e Integração Backend

## 📋 Resumo do Frontend Implementado

### ✅ Páginas Funcionais
- **Home**: Hero section, serviços, benefícios, CTA
- **Services**: Catálogo completo de serviços com pricing
- **Booking**: Formulário de agendamento com sidebar informativa  
- **Contact**: Formulário de contato e informações da empresa

### ✅ Funcionalidades Frontend
- **Sistema multilíngue**: Português, Espanhol (MX), Inglês
- **Design responsivo**: Mobile-first com cores azul/laranja
- **Logo personalizado**: TechData (Tech=azul, Data=laranja)
- **Componentes shadcn**: Interface moderna e profissional

---

## 🔄 Dados Mock Implementados (mock.js)

### Serviços (8 categorias principais):
```javascript
1. computer-repair - Manutenção de Computadores
2. network-installation - Instalação de Redes  
3. home-automation - Automação Doméstica
4. software-services - Instalação de Software
5. cyber-security - Consultoria em Cyber Security
6. custom-development - Desenvolvimento de Software
7. web-design - Design e Sites
8. hardware-upgrade - Upgrade de Hardware
```

### Mock de Agendamentos:
- Nome, email, telefone, serviço, data, horário, mensagem
- Status: pending, confirmed, completed, cancelled

### Mock de Contatos:
- Formulários de contato com tipo de serviço
- Informações da empresa (endereço, telefone, email)

---

## 🚀 API Contracts para Backend

### 1. **Serviços** (`/api/services`)

#### GET /api/services
```json
{
  "services": [
    {
      "id": 1,
      "category": "computer-repair", 
      "title": "Manutenção e Reparação de Computadores",
      "description": "Serviços completos...",
      "features": ["Diagnóstico gratuito", "Reparo 48h"],
      "pricing": "A partir de $50",
      "duration": "24-48 horas",
      "active": true
    }
  ]
}
```

### 2. **Agendamentos** (`/api/bookings`)

#### POST /api/bookings
```json
{
  "service": "computer-repair",
  "date": "2025-01-20", 
  "time": "10:00",
  "name": "João Silva",
  "phone": "(407) 729-2141",
  "email": "joao@email.com",
  "message": "Notebook não liga mais",
  "language": "pt"
}
```

#### GET /api/bookings (Admin)
```json
{
  "bookings": [
    {
      "id": 1,
      "status": "pending",
      "created_at": "2025-01-15T10:00:00Z",
      ...
    }
  ]
}
```

### 3. **Mensagens de Contato** (`/api/contact`)

#### POST /api/contact
```json
{
  "name": "Maria Silva",
  "email": "maria@email.com", 
  "phone": "(407) 555-0123",
  "company": "Loja Flores",
  "subject": "Orçamento para rede",
  "message": "Preciso instalar Wi-Fi...",
  "service_type": "network-installation",
  "language": "pt"
}
```

---

## 🔧 Implementação Backend Necessária

### Models MongoDB:
1. **Service**: Catálogo de serviços
2. **Booking**: Agendamentos de clientes  
3. **ContactMessage**: Mensagens de contato
4. **BusinessSettings**: Configurações da empresa

### Endpoints Essenciais:
```python
# Serviços
GET /api/services - Listar serviços
POST /api/services - Criar serviço (admin)

# Agendamentos  
POST /api/bookings - Criar agendamento
GET /api/bookings - Listar agendamentos (admin)
PUT /api/bookings/{id} - Atualizar status

# Contato
POST /api/contact - Enviar mensagem

# Configurações
GET /api/business-info - Info da empresa
```

### Funcionalidades Backend:
- **Validação de dados** com Pydantic
- **Notificações por email** para novos agendamentos/contatos
- **Sistema de status** para agendamentos
- **Filtros e busca** para admin
- **Rate limiting** para formulários

---

## 🔗 Integração Frontend ↔ Backend

### Arquivos a Modificar:
1. **`/data/mock.js`**: Remover dados mock
2. **Páginas**: Substituir mock calls por axios API calls
3. **Forms**: Integrar com endpoints reais
4. **Error handling**: Adicionar tratamento de erros da API

### Environment Variables:
- Frontend já configurado com `REACT_APP_BACKEND_URL`
- Backend usará `MONGO_URL` existente

---

## ✅ Status Atual

- ✅ Frontend completo com mock data
- ✅ Design profissional e responsivo  
- ✅ Sistema multilíngue funcional
- ✅ Formulários interativos
- ⏳ **Próximo**: Implementar backend e integração real

---

**Pronto para prosseguir com a implementação do backend?**