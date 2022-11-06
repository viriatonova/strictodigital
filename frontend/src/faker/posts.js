import { faker } from "@faker-js/faker";

export const MainBLogPosts = [
    {
        image: faker.image.city(1280, 1280, true),
        title: faker.lorem.sentence(),
        author: faker.name.fullName(),
        body: faker.lorem.paragraphs(12),
        description: faker.lorem.paragraphs(1),
    },
    {
        image: faker.image.city(1280, 1280, true),
        title: faker.lorem.sentence(),
        author: faker.name.fullName(),
        body: faker.lorem.paragraphs(12),
        description: faker.lorem.paragraphs(1),
    },
    {
        image: faker.image.city(1280, 1280, true),
        title: faker.lorem.sentence(),
        author: faker.name.fullName(),
        body: faker.lorem.paragraphs(12),
        description: faker.lorem.paragraphs(1),
    },
    {
        image: faker.image.city(1280, 1280, true),
        title: faker.lorem.sentence(),
        author: faker.name.fullName(),
        body: faker.lorem.paragraphs(12),
        description: faker.lorem.paragraphs(1),
    },
];
