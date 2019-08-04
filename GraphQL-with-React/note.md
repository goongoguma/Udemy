<h2 name="1">Query Fragments</h2>

- 프론트엔드단에서 그래프QL을 이용할때 요청을 보낼경우 이름을 명시해주는것이 좋다.
    ```GraphQL
    query fetchCompany {
        company(id: "1") {
            id
            name
            description
        }
    }
    ```
- 객체처럼 쿼리를 보낼때 키를 설정해 줄 수도 있다. 
    ```GraphQL
    {
        apple: company(id:"1") {
            id
            name
            description
        }
        google: company(id:"1") {
            id
            name
            description
        }
    }
    ```
- 프로퍼티의 중복은 query fragments로 해결 
    ```GraphQL
    {
        apple: company(id:"1") {
            ...companyDetails
        }
        google: company(id:"1") {
            ...companyDetails
        }
    }

    fragment companyDetails on Company {
        id
        name
        description
    }
    ```

<h2 name="2">Query Fragments</h2>

- query -> Root Query -> Usertype & CompanyType처럼 mutation을 설정
- mutaion -> Mutations -> addUser & deleteUser

    ```GraphQL
    const mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            // fiedls property describes the operation that this mutation undertake
            addUser: {
                type: UserType,
                args: {
                    firstName: { type: GraphQLString },
                    age: { type: GraphQLInt },
                    companyId: { type: GraphQLString }
                },
                resolve() {

                }
            }
        }
    })
    ```

<h2 name="3">NonUll Fields and Mutations</h2>

- addUser에 있는 프로퍼티들의 값들의 validation을 위해 GraphQLNoNUll을 사용
    ```GraphQL
    const mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            // fields property describes the operation that this mutation undertake
            addUser: {
                type: UserType,
                args: {
                    firstName: { type: new GraphQLNonNull(GraphQLString) },
                    age: { type: new GraphQLNonNull(GraphQLInt) },
                    companyId: { type: GraphQLString }
                },
                resolve() {

                }
            }
        }
    })
    ```
- 즉, 이 mutation을 사용하기 위해서는 firstName과 age는 필수
- resolve 함수를 작성해주고 GraphQLSchema에 추가해주기
    ```GraphQL
    const mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            // fiedls property describes the operation that this mutation undertake
            addUser: {
                type: UserType,
                args: {
                    firstName: { type: new GraphQLNonNull(GraphQLString) },
                    age: { type: new GraphQLNonNull(GraphQLInt) },
                    companyId: { type: GraphQLString }
                },
                resolve(parentValue, { firstName, age}) {
                    return axios.post(`http://localhost:3000/users`, { firstName, age })
                        .then(res => res.data)
                }
            }
        }
    })

    module.exports = new GraphQLSchema({
        query: RootQuery,
        mutation
    });
    ```
- GraphiQL을 이용해 mutation 확인해보기
    ```GraphQL
    mutation {
        addUser(firstName: "Stephen", age: 26) {
            id
            firstName
            age
        }
    }
    ```

<h2 name="4">Delete Mutation</h2>

    ```GraphQL
     deleteUser: {
        type: UserType,
        args: {
            id: { type: GraphQLNonNull(GraphQLString) }
        }, 
        resolve(parentValue, args) {
            return axios.delete(`http://localhost:3000/users/${args.id}`)
                .then(res => res.data);
        }
    }
    ```
       ```GraphiQL
    // 이렇게 요청
    mutation {
        deleteUser(id:"40") {
            id // return null
        }
    }
    ```

- return은 null값 (json서버가 원래 그럼)

<h2 name="5">Edit Mutation</h2>

- put 리퀘스트는 전체적으로 수정, patch 리퀘스트는 리퀘스트 바디에 있는 내용만 수정하기 때문에 patch를 사용
    ```GraphQL
    editUser: {
        type: UserType,
        args: {
            id: { type: GraphQLNonNull(GraphQLString) },
            firstName: { type: (GraphQLString) },
            age: { type: (GraphQLInt) },
            companyId: { type: GraphQLString }
        },
        resolve(parentValue, args) {
            return axios.patch(`http://localhost:3000/users/${args.id}`, args)
                .then(res => res.data);
        }
    }
    ```
    ```GraphiQL
    // 이렇게 요청
    mutation {
        editUser(id:"40", age: 10) {
            id
            firstName
            age
        }
    }
    ```
