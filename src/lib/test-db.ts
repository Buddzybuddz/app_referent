import db from './db'

async function test() {
  try {
    const count = await db.referent.count()
    console.log('Referent count:', count)
  } catch (err) {
    console.error('Error connecting to DB:', err)
  } finally {
    await db.$disconnect()
  }
}

test()
