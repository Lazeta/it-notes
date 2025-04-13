export const typeConversionInJS = {
  id: 212,
  title: "Type Conversion in JavaScript / Преобразования типов в JavaScript",
  children: [
    {
      title: "Таблица преобразований",
      type: "text",
      description: `
          <table border="1" cellpadding="5" cellspacing="0" style="width:100%;border-collapse:collapse;">
            <thead>
              <tr>
                <th>Исходное значение</th>
                <th>В Number</th>
                <th>В String</th>
                <th>В Boolean</th>
                <th>В Object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>""</code> (пустая строка)</td>
                <td><code>0</code></td>
                <td><code>""</code></td>
                <td><code>false</code></td>
                <td><code>String {""}</code></td>
              </tr>
              <tr>
                <td><code>"42"</code></td>
                <td><code>42</code></td>
                <td><code>"42"</code></td>
                <td><code>true</code></td>
                <td><code>String {"42"}</code></td>
              </tr>
              <tr>
                <td><code>"hello"</code></td>
                <td><code>NaN</code></td>
                <td><code>"hello"</code></td>
                <td><code>true</code></td>
                <td><code>String {"hello"}</code></td>
              </tr>
              <tr>
                <td><code>true</code></td>
                <td><code>1</code></td>
                <td><code>"true"</code></td>
                <td><code>true</code></td>
                <td><code>Boolean {true}</code></td>
              </tr>
              <tr>
                <td><code>false</code></td>
                <td><code>0</code></td>
                <td><code>"false"</code></td>
                <td><code>false</code></td>
                <td><code>Boolean {false}</code></td>
              </tr>
              <tr>
                <td><code>null</code></td>
                <td><code>0</code></td>
                <td><code>"null"</code></td>
                <td><code>false</code></td>
                <td><code>TypeError</code></td>
              </tr>
              <tr>
                <td><code>undefined</code></td>
                <td><code>NaN</code></td>
                <td><code>"undefined"</code></td>
                <td><code>false</code></td>
                <td><code>TypeError</code></td>
              </tr>
              <tr>
                <td><code>0</code></td>
                <td><code>0</code></td>
                <td><code>"0"</code></td>
                <td><code>false</code></td>
                <td><code>Number {0}</code></td>
              </tr>
              <tr>
                <td><code>1</code></td>
                <td><code>1</code></td>
                <td><code>"1"</code></td>
                <td><code>true</code></td>
                <td><code>Number {1}</code></td>
              </tr>
              <tr>
                <td><code>{}</code> (объект)</td>
                <td><code>NaN</code></td>
                <td><code>"[object Object]"</code></td>
                <td><code>true</code></td>
                <td><code>{}</code> (то же)</td>
              </tr>
              <tr>
                <td><code>[]</code> (массив)</td>
                <td><code>0</code></td>
                <td><code>""</code></td>
                <td><code>true</code></td>
                <td><code>[]</code> (то же)</td>
              </tr>
              <tr>
                <td><code>[1, 2]</code></td>
                <td><code>NaN</code></td>
                <td><code>"1,2"</code></td>
                <td><code>true</code></td>
                <td><code>[1, 2]</code> (то же)</td>
              </tr>
              <tr>
                <td><code>function(){}</code></td>
                <td><code>NaN</code></td>
                <td><code>"function(){}"</code></td>
                <td><code>true</code></td>
                <td><code>function(){}</code> (то же)</td>
              </tr>
            </tbody>
          </table>
        `,
    },
    {
      title: "Явные преобразования",
      type: "text",
      description: `
          <p><strong>Способы явного приведения типов:</strong></p>
          <ul>
            <li><strong>В Number:</strong>
              <pre><code>Number("42")    // 42
  +"42"         // 42
  parseInt("42") // 42</code></pre>
            </li>
            <li><strong>В String:</strong>
              <pre><code>String(42)      // "42"
  (42).toString() // "42"
  \`${42}\`        // "42" (шаблонные строки)</code></pre>
            </li>
            <li><strong>В Boolean:</strong>
              <pre><code>Boolean(1)      // true
  !!1            // true (двойное отрицание)
  !!0            // false</code></pre>
            </li>
          </ul>
        `,
    },
    {
      title: "Особенности неявных преобразований",
      type: "text",
      description: `
          <p><strong>Где встречаются неявные преобразования:</strong></p>
          <ul>
            <li>Арифметические операции (<code>"5" - 2 // 3</code>)</li>
            <li>Сравнения (<code>"5" == 5 // true</code>)</li>
            <li>Логические операции (<code>if ("hello") {...}</code>)</li>
            <li>Конкатенация строк (<code>"2" + 2 // "22"</code>)</li>
          </ul>
          <p><strong>Лучшие практики:</strong></p>
          <ul>
            <li>Используйте <code>===</code> вместо <code>==</code></li>
            <li>Явно приводите типы для важных операций</li>
            <li>Проверяйте типы с помощью <code>typeof</code> и <code>Number.isNaN()</code></li>
          </ul>
        `,
    },
  ],
};
