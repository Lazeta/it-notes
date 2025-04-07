export const polymorphismInReact = {
  id: 520,
  title: "Полиморфизм в React",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
          <p><strong>Полиморфизм</strong> — это возможность компонентов работать с разными типами данных или иметь различное поведение в зависимости от переданных параметров.</p>
          <p>В React полиморфизм реализуется через:</p>
          <ul>
            <li>Условный рендеринг</li>
            <li>Компоненты высшего порядка (HOC)</li>
            <li>Render Props</li>
            <li>Динамические компоненты</li>
            <li>Пропсы <code>as</code> или <code>component</code></li>
          </ul>
        `,
    },
    {
      title: "Полиморфные компоненты через проп 'as'",
      type: "text",
      description: `
          <p>Компонент может рендерить разные HTML-элементы или другие компоненты:</p>
          <pre><code>function PolymorphicComponent({ as: Component = 'div', children, ...props }) {
    return &lt;Component {...props}&gt;{children}&lt;/Component&gt;;
  }
  
  // Использование:
  &lt;PolymorphicComponent as="button" onClick={...}&gt;Кнопка&lt;/PolymorphicComponent&gt;
  &lt;PolymorphicComponent as={Link} to="/"&gt;Ссылка&lt;/PolymorphicComponent&gt;</code></pre>
        `,
    },
    {
      title: "Условный рендеринг",
      type: "text",
      description: `
          <p>Разное поведение в зависимости от пропсов:</p>
          <pre><code>function UserCard({ user, isAdmin }) {
    return (
      &lt;div&gt;
        &lt;h2&gt;{user.name}&lt;/h2&gt;
        {isAdmin && &lt;button&gt;Удалить&lt;/button&gt;}
        {user.type === 'premium' ? (
          &lt;PremiumBadge /&gt;
        ) : (
          &lt;StandardBadge /&gt;
        )}
      &lt;/div&gt;
    );
  }</code></pre>
        `,
    },
    {
      title: "Render Props",
      type: "text",
      description: `
          <p>Компонент принимает функцию для рендеринга:</p>
          <pre><code>function DataFetcher({ url, render }) {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch(url).then(res => setData(res.json()));
    }, [url]);
  
    return render(data);
  }
  
  // Использование:
  &lt;DataFetcher 
    url="/api/users"
    render={data => data ? &lt;UserList users={data} /&gt; : &lt;Spinner /&gt;}
  /&gt;</code></pre>
        `,
    },
    {
      title: "HOC (Компоненты высшего порядка)",
      type: "text",
      description: `
          <p>Функция, которая принимает компонент и возвращает новый компонент:</p>
          <pre><code>function withAuth(Component) {
    return function AuthenticatedComponent(props) {
      const isAuthenticated = checkAuth();
      
      return isAuthenticated 
        ? &lt;Component {...props} /&gt;
        : &lt;Redirect to="/login" /&gt;;
    };
  }
  
  const PrivateComponent = withAuth(MyComponent);</code></pre>
        `,
    },
    {
      title: "Динамические компоненты",
      type: "text",
      description: `
          <p>Рендер компонента по его имени или типу:</p>
          <pre><code>const components = {
    text: TextInput,
    number: NumberInput,
    date: DatePicker
  };
  
  function DynamicFormField({ fieldType, ...props }) {
    const Component = components[fieldType] || FallbackComponent;
    return &lt;Component {...props} /&gt;;
  }</code></pre>
        `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
          <ul>
            <li><strong>TypeScript:</strong> Используйте дженерики для полиморфных компонентов</li>
            <li><strong>Документируйте:</strong> Указывайте допустимые типы для пропсов</li>
            <li><strong>Избегайте избыточности:</strong> Не усложняйте компоненты без необходимости</li>
            <li><strong>Композиция:</strong> Предпочитайте композицию наследованию</li>
          </ul>
        `,
    },
  ],
};
