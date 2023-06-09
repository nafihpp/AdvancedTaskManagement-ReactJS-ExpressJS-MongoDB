# AdvancedTaskManagement

https://task-manager-2023.vercel.app/

![todoloccal](https://user-images.githubusercontent.com/49452140/236644579-2ef317c2-8b8f-428d-a1a4-33ac92963c5e.jpg)

## Technology
- React JS
- Backend - Express JS
- Database - MongoDB
- Hosting - Frontend(Vercel)
- Hosting - Backend(Render)


## API Reference

https://taskmanagementbackend-wt2p.onrender.com

#### Get all Tasks

```http
  GET /api/get-all-talks
```
### Add a Task
```http
  POST /api/add-task
```

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `task_id` | `string` | **Required**. Id of item          |
| `task`    | `string` | **Required**. task-title of item  |
|`completed`| `boolean`| **Required**. completed status    |

#### Mark as Complete/Mark as incomplete 

```http
  POST /api/mark-as-complete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item          |

#### DELETE

```http
  DELETE /api/remove-task/?remove="id"
```

| Query     | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item          |

### UPDATE A TASK
```http
  PUT /api/update-task
```

| Query     | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item          |








