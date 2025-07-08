# 🌴 Long Weekend API Service

A REST API service that helps you discover long weekends in various countries by analyzing public holidays and weekends. Built with Node.js and Express.

## 🎯 Overview

The Long Weekend API identifies and returns long weekends (3+ consecutive non-working days) for any supported country. A long weekend is defined as a stretch of 3 or more consecutive days that includes:
- Public holidays
- Weekends (Saturday & Sunday)

## ✨ Features

- 🗓️ **Get All Long Weekends**: Returns all long weekends for the current year
- 🔮 **Next Long Weekend**: Find the next upcoming long weekend from today
- 🌍 **Multi-Country Support**: Works with 100+ countries
- 📊 **Holiday Data**: Uses real-time public holiday data from Nager.Date API
- 🚀 **RESTful Design**: Clean, intuitive API endpoints
- ⚡ **Fast Response**: Optimized date calculations and caching

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd long-weekend-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Development mode** (with auto-reload)
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3000`

## 🚀 Usage

### Base URL
```
http://localhost:3000
```

### Health Check
```bash
curl http://localhost:3000/
```
Response: `🌴 Long Weekend API is running`

## 📡 API Endpoints

### 1. Get All Long Weekends

Returns all long weekends for the current year in the specified country.

**Endpoint:** `GET /api/long-weekends/:countryCode`

**Parameters:**
- `countryCode` (required): Two-letter country code (e.g., `US`, `GB`, `DE`)

**Response:**
```json
[
  {
    "start_date": "2024-05-25",
    "end_date": "2024-05-27",
    "length_days": 3
  },
  {
    "start_date": "2024-07-04",
    "end_date": "2024-07-07",
    "length_days": 4
  }
]
```

### 2. Get Next Long Weekend

Returns the next upcoming long weekend from the current date.

**Endpoint:** `GET /api/next-long-weekend/:countryCode`

**Parameters:**
- `countryCode` (required): Two-letter country code (e.g., `US`, `GB`, `DE`)

**Response:**
```json
{
  "start_date": "2024-05-25",
  "end_date": "2024-05-27",
  "length_days": 3
}
```

**No upcoming long weekends:**
```json
{
  "message": "No more long weekends this year."
}
```

## 🌍 Supported Countries

The API supports 100+ countries. Here are the available country codes:

| Country Code | Country Name | Country Code | Country Name |
|--------------|--------------|--------------|--------------|
| AD | Andorra | AU | Australia |
| AL | Albania | AT | Austria |
| AM | Armenia | AX | Åland Islands |
| AR | Argentina | BA | Bosnia and Herzegovina |
| BB | Barbados | BE | Belgium |
| BG | Bulgaria | BJ | Benin |
| BO | Bolivia | BR | Brazil |
| BS | Bahamas | BW | Botswana |
| BY | Belarus | BZ | Belize |
| CA | Canada | CD | DR Congo |
| CG | Congo | CH | Switzerland |
| CL | Chile | CN | China |
| CO | Colombia | CR | Costa Rica |
| CU | Cuba | CY | Cyprus |
| CZ | Czechia | DE | Germany |
| DK | Denmark | DO | Dominican Republic |
| EC | Ecuador | EE | Estonia |
| EG | Egypt | ES | Spain |
| FI | Finland | FO | Faroe Islands |
| FR | France | GA | Gabon |
| GB | United Kingdom | GD | Grenada |
| GE | Georgia | GG | Guernsey |
| GI | Gibraltar | GL | Greenland |
| GM | Gambia | GR | Greece |
| GT | Guatemala | GY | Guyana |
| HK | Hong Kong | HN | Honduras |
| HR | Croatia | HT | Haiti |
| HU | Hungary | ID | Indonesia |
| IE | Ireland | IM | Isle of Man |
| IS | Iceland | IT | Italy |
| JE | Jersey | JM | Jamaica |
| JP | Japan | KR | South Korea |
| KZ | Kazakhstan | LI | Liechtenstein |
| LS | Lesotho | LT | Lithuania |
| LU | Luxembourg | LV | Latvia |
| MA | Morocco | MC | Monaco |
| MD | Moldova | ME | Montenegro |
| MG | Madagascar | MK | North Macedonia |
| MN | Mongolia | MS | Montserrat |
| MT | Malta | MX | Mexico |
| MZ | Mozambique | NA | Namibia |
| NE | Niger | NG | Nigeria |
| NI | Nicaragua | NL | Netherlands |
| NO | Norway | NZ | New Zealand |
| PA | Panama | PE | Peru |
| PG | Papua New Guinea | PH | Philippines |
| PL | Poland | PR | Puerto Rico |
| PT | Portugal | PY | Paraguay |
| RO | Romania | RS | Serbia |
| RU | Russia | SE | Sweden |
| SG | Singapore | SI | Slovenia |
| SJ | Svalbard and Jan Mayen | SK | Slovakia |
| SM | San Marino | SR | Suriname |
| SV | El Salvador | TN | Tunisia |
| TR | Türkiye | UA | Ukraine |
| US | United States | UY | Uruguay |
| VA | Vatican City | VE | Venezuela |
| VN | Vietnam | ZA | South Africa |
| ZW | Zimbabwe |

## 📝 Examples

### Example 1: Get all long weekends for United States
```bash
curl http://localhost:3000/api/long-weekends/US
```

### Example 2: Get next long weekend for Germany
```bash
curl http://localhost:3000/api/next-long-weekend/DE
```

### Example 3: Get long weekends for India
```bash
curl http://localhost:3000/api/long-weekends/IN
```

## 📦 Dependencies

- **express**: Web framework for Node.js
- **axios**: HTTP client for API requests
- **nodemon**: Development tool for auto-restarting server

### External API
- Uses [Nager.Date API](https://date.nager.at/) for public holiday data
- No API key required
- Rate limits may apply for excessive usage

## 🚨 Error Handling

The API includes comprehensive error handling:

### HTTP Status Codes
- `200`: Success
- `500`: Internal server error (holiday data fetch failed)

### Error Response Format
```json
{
  "error": "Failed to fetch holidays: [error message]"
}
```

**Built with ❤️ for better vacation planning!**
