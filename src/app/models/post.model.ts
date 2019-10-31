export interface PostModel {
    id: Number,
    userId: Number,
    title: String,
    body: String,
    cover?: String // ? makes the property optional
}
