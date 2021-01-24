const path = require('path')

describe('TODOアプリ', () => {
  beforeEach(async () => {
    await page.goto('file://' + path.resolve(__dirname, '../index.html'))
    await page.waitForSelector('#todoList', { visible: false })
    await page.waitForSelector('#todoEmpty', { visible: true })
  })

  it('初期表示', async () => {
    await expect(page).toMatchElement('#todoEmpty', {
      text: 'タスクがありません',
    })
    await expect(page).toMatchElement('#nextTodo', {
      text: '次のTODO: (未登録)',
    })
    await expect(page).toMatchElement('#todoCount', { text: '(全0件)' })
  })
})
