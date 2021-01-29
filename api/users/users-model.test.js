
it('is the correct env', () => {
    expect(process.env.DB_ENV).toBe('testing');
});

const User = require('./user-model');
const db = require('../../data/db-config');

const testUser = {
    username: 'tester1',
    password: '1234',
    email: 'tester1@gmail.com'
}

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});
beforeEach(async () => {
    await db('users').truncate();
});
afterAll(async () => {
    await db.destroy();
});

describe('insert function', () => {
    it('exists', () => {
        expect(User.insert).toBeDefined();
    });
    it('adds user to table', async () => {
        await User.insert(testUser);
        const users = await db('users');
        expect(users).toHaveLength(1);
    });
    it('resolves to the added user', async () => {
        const user = await User.insert(testUser);
        expect(user).toMatchObject({userId: 1, ...testUser});
    });
});

describe('getAll function', () => {
    it('exists', () => {
        expect(User.getAll).toBeDefined();
    });
    it('resolves to all users in table', async () => {
        const totalUsers = 10;
        for(let i = 0; i < totalUsers; i++)
            await db('users').insert(testUser);
        const users = await User.getAll();
        expect(users).toHaveLength(totalUsers);
    });
});