![](UpdatingState.png)
Em um update, as duas funções dispostas em sequência abaixo, 
teoricamente teriam um efeito de alternar o valor do state, 
porém não é o caso.
OBS: as duas têm a mesma função, muda somente a sintaxe.
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    
A função abaixo tem o mesmo efeito das acima,
porém, garante o valor do último state 
caso haja uma chamada dupla ou simultânea de update 
na mesma função.
   // setIsEditing((editing)=>!editing);

![](LiftingStateUp.png)
Lift state up é um recurso do React que permite passar um update
de um component antecessor para um segundo (child) component via props

![](stateVSrefs.png)
Ref é um hook que executa uma tarefa similar ao State, porém não 
faz o update do componente aplicado em questão. Como vantagem,
ele é capaz de acessar diretamente o DOM do elemento (tag) e APIs. 