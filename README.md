## How to start api Server

```
sudo docker compose up
```

## After the start once

```
sudo docker exec backend /bin/sh start.sh
```

## /api/register
```
Accepts {
  "name": "rubbish",
  "email": "rubbish",
  "password": "rubbish",
}

returns {
  "name": "rubbish",
  "email": "rubbish",
  "updated_at": "2024-11-29T20:02:36.000000Z",
  "created_at": "2024-11-29T20:02:36.000000Z",
  "id": 1
}
```

## /api/login
```
Accepts {
  "email": "rubbish"
  "password": "rubbish"
}

Returns {
  "message": "1|mnmUbD5DIYfZYOXkixOZORYUlQfeGef9DxqBeeFF"
}

Assigns {
  jwt: "...", httponly, not secure
}

```

> https://www.youtube.com/watch?v=Gum76LQcJXY