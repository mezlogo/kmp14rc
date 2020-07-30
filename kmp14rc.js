(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kmp14rc = factory(typeof kmp14rc === 'undefined' ? {} : kmp14rc);
}(this, function (_) {
  'use strict';
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  _no_name_provided__4.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__4.prototype.constructor = _no_name_provided__4;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  EntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  _no_name_provided__1_0.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__1_0.prototype.constructor = _no_name_provided__1_0;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList_0.prototype = Object.create(LinkedListHead.prototype);
  NodeList_0.prototype.constructor = NodeList_0;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  CancellationException.prototype = Object.create(IllegalStateException.prototype);
  CancellationException.prototype.constructor = CancellationException;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  $requestRemoteDataCOROUTINE$1.prototype = Object.create(CoroutineImpl_0.prototype);
  $requestRemoteDataCOROUTINE$1.prototype.constructor = $requestRemoteDataCOROUTINE$1;
  SecondImpl.prototype = Object.create(FirstImpl.prototype);
  SecondImpl.prototype.constructor = SecondImpl;
  _no_name_provided__34.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__34.prototype.constructor = _no_name_provided__34;
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this_.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function _get_lastIndex_(_this_) {
    return _this_.length - 1 | 0;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    var separator_0 = !(($mask0 & 1) === 0) ? ', ' : separator;
    var prefix_0 = !(($mask0 & 2) === 0) ? '' : prefix;
    var postfix_0 = !(($mask0 & 4) === 0) ? '' : postfix;
    var limit_0 = !(($mask0 & 8) === 0) ? -1 : limit;
    var truncated_0 = !(($mask0 & 16) === 0) ? '...' : truncated;
    var transform_0 = !(($mask0 & 32) === 0) ? null : transform;
    return joinToString(_this_, separator_0, prefix_0, postfix_0, limit_0, truncated_0, transform_0);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_3(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_3(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_3(truncated);
      Unit_getInstance();
    }buffer.append_3(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    var separator_0 = !(($mask0 & 1) === 0) ? ', ' : separator;
    var prefix_0 = !(($mask0 & 2) === 0) ? '' : prefix;
    var postfix_0 = !(($mask0 & 4) === 0) ? '' : postfix;
    var limit_0 = !(($mask0 & 8) === 0) ? -1 : limit;
    var truncated_0 = !(($mask0 & 16) === 0) ? '...' : truncated;
    var transform_0 = !(($mask0 & 32) === 0) ? null : transform;
    return joinToString_0(_this_, separator_0, prefix_0, postfix_0, limit_0, truncated_0, transform_0);
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_3(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_21();
    while (tmp0_iterator.hasNext_3()) {
      var element = tmp0_iterator.next_3();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_3(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_3(truncated);
      Unit_getInstance();
    }buffer.append_3(postfix);
    Unit_getInstance();
    return buffer;
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue.compareTo_28(maximumValue) > 0)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_.compareTo_28(minimumValue) < 0)
      return minimumValue;
    if (_this_.compareTo_28(maximumValue) > 0)
      return maximumValue;
    return _this_;
  }
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_9 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_11();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_21();
      while (tmp0_iterator_1.hasNext_3()) {
        var element_2 = tmp0_iterator_1.next_3();
        if (equals(element_2, element)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_7 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_11();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_21();
      while (tmp0_iterator_1.hasNext_3()) {
        var element_2 = tmp0_iterator_1.next_3();
        if (!this.contains_9(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_11 = function () {
    return this._get_size__15() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory($this) {
    var i = new _no_name_provided_($this);
    return function (p1) {
      return i.invoke_0(p1);
    };
  }
  function _no_name_provided_($this) {
    this._$this = $this;
  }
  _no_name_provided_.prototype.invoke_0 = function (it) {
    return it === this._$this ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_68 = function (p1) {
    return this.invoke_0((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex = function (index, size_0) {
    if (index < 0 ? true : index >= size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkPositionIndex = function (index, size_0) {
    if (index < 0 ? true : index > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkRangeIndexes = function (fromIndex, toIndex, size_0) {
    if (fromIndex < 0 ? true : toIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size_0);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.orderedHashCode = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_21();
    while (tmp0_iterator.hasNext_3()) {
      var e = tmp0_iterator.next_3();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals = function (c, other) {
    if (!(c._get_size__15() === other._get_size__15()))
      return false;
    var otherIterator = other.iterator_21();
    var tmp0_iterator = c.iterator_21();
    while (tmp0_iterator.hasNext_3()) {
      var elem = tmp0_iterator.next_3();
      var elemOther = otherIterator.next_3();
      if (!equals(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function AbstractMap() {
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_2 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_1 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__18();
    var value = entry._get_value__4();
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_14(key);
    if (!equals(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__15() === other._get_size__15()))
      return false;
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = other._get_entries__2();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_11();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_21();
      while (tmp0_iterator_1.hasNext_3()) {
        var element_2 = tmp0_iterator_1.next_3();
        if (!this.containsEntry_1(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_14 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__4();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__2());
  };
  AbstractMap.prototype.isEmpty_11 = function () {
    return this._get_size__15() === 0;
  };
  AbstractMap.prototype._get_size__15 = function () {
    return this._get_entries__2()._get_size__15();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__2();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_0 = function (entry) {
    return toString(this, entry._get_key__18()) + '=' + toString(this, entry._get_value__4());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0($this) {
    var i = new _no_name_provided__0($this);
    return function (p1) {
      return i.invoke_2(p1);
    };
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__2();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_21();
      while (tmp0_iterator_1.hasNext_3()) {
        var element_2 = tmp0_iterator_1.next_3();
        if (equals(element_2._get_key__18(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode = function (e) {
    var tmp2_safe_receiver_4 = e._get_key__18();
    var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
    var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
    var tmp0_safe_receiver_6 = e._get_value__4();
    var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
    return tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
  };
  Companion_1.prototype.entryToString = function (e) {
    return '' + e._get_key__18() + '=' + e._get_value__4();
  };
  Companion_1.prototype.entryEquals = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals(e._get_key__18(), other._get_key__18()) ? equals(e._get_value__4(), other._get_value__4()) : false;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__0($this) {
    this._$this_0 = $this;
  }
  _no_name_provided__0.prototype.invoke_2 = function (it) {
    return this._$this_0.toString_0(it);
  };
  _no_name_provided__0.prototype.invoke_68 = function (p1) {
    return this.invoke_2((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_21();
    while (tmp0_iterator.hasNext_3()) {
      var element = tmp0_iterator.next_3();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals = function (c, other) {
    if (!(c._get_size__15() === other._get_size__15()))
      return false;
    return c.containsAll_7(other);
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function _get_lastIndex__0(_this_) {
    return _this_._get_size__15() - 1 | 0;
  }
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function startCoroutine(_this_, receiver, completion) {
    var tmp0_resume_0 = intercepted(createCoroutineUnintercepted(_this_, receiver, completion));
    var tmp1_resume_0 = Unit_getInstance();
    var tmp0_success_0_1 = Companion_getInstance_2();
    tmp0_resume_0.resumeWith_8(Unit_getInstance());
  }
  function ContinuationInterceptor() {
  }
  ContinuationInterceptor.prototype.releaseInterceptedContinuation_9 = function (continuation) {
  };
  ContinuationInterceptor.prototype.get_28 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.isSubKey(this._get_key__18())) {
        var tmp_0 = key.tryCast(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element_0) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    } else {
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  ContinuationInterceptor.prototype.minusKey_18 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      return (key.isSubKey(this._get_key__18()) ? !(key.tryCast(this) == null) : false) ? EmptyCoroutineContext_getInstance() : this;
    } else {
    }
    return Key_getInstance() === key ? EmptyCoroutineContext_getInstance() : this;
  };
  ContinuationInterceptor.$metadata$ = {
    simpleName: 'ContinuationInterceptor',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineContext() {
  }
  CoroutineContext.prototype.plus_17 = function (context) {
    var tmp;
    if (context === EmptyCoroutineContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.fold_17(this, _no_name_provided_$factory_1());
    }
    return tmp;
  };
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__1();
    return function (p1, p2) {
      return i.invoke_4(p1, p2);
    };
  }
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  function Element_0() {
  }
  Element_0.prototype.get_28 = function (key) {
    var tmp;
    if (equals(this._get_key__18(), key)) {
      tmp = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  Element_0.prototype.fold_17 = function (initial, operation) {
    return operation(initial, this);
  };
  Element_0.prototype.minusKey_18 = function (key) {
    return equals(this._get_key__18(), key) ? EmptyCoroutineContext_getInstance() : this;
  };
  Element_0.$metadata$ = {
    simpleName: 'Element',
    kind: 'interface',
    interfaces: [CoroutineContext]
  };
  function _no_name_provided__1() {
  }
  _no_name_provided__1.prototype.invoke_4 = function (acc, element) {
    var removed = acc.minusKey_18(element._get_key__18());
    var tmp;
    if (removed === EmptyCoroutineContext_getInstance()) {
      tmp = element;
    } else {
      var interceptor = removed.get_28(Key_getInstance());
      var tmp_0;
      if (interceptor == null) {
        tmp_0 = new CombinedContext(removed, element);
      } else {
        var left = removed.minusKey_18(Key_getInstance());
        tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  _no_name_provided__1.prototype.invoke_66 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineContext) : false) ? p1 : THROW_CCE();
    return this.invoke_4(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this._serialVersionUID = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_28 = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.fold_17 = function (initial, operation) {
    return initial;
  };
  EmptyCoroutineContext.prototype.plus_17 = function (context) {
    return context;
  };
  EmptyCoroutineContext.prototype.minusKey_18 = function (key) {
    return this;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function CombinedContext(left, element) {
    this._left = left;
    this._element = element;
  }
  CombinedContext.prototype.get_28 = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur._element.get_28(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        return tmp0_safe_receiver;
      }
      Unit_getInstance();
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return next.get_28(key);
        }
      }
    }
  };
  CombinedContext.prototype.fold_17 = function (initial, operation) {
    return operation(this._left.fold_17(initial, operation), this._element);
  };
  CombinedContext.prototype.minusKey_18 = function (key) {
    var tmp0_safe_receiver = this._element.get_28(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      return this._left;
    }
    Unit_getInstance();
    var newLeft = this._left.minusKey_18(key);
    return newLeft === this._left ? this : newLeft === EmptyCoroutineContext_getInstance() ? this._element : new CombinedContext(newLeft, this._element);
  };
  CombinedContext.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = containsAll(other, this);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CombinedContext.prototype.hashCode = function () {
    return hashCode(this._left) + hashCode(this._element) | 0;
  };
  CombinedContext.prototype.toString = function () {
    return '[' + this.fold_17('', _no_name_provided_$factory_2()) + ']';
  };
  CombinedContext.$metadata$ = {
    simpleName: 'CombinedContext',
    kind: 'class',
    interfaces: [CoroutineContext, Serializable]
  };
  function AbstractCoroutineContextKey() {
  }
  AbstractCoroutineContextKey.prototype.tryCast = function (element) {
    return this._safeCast(element);
  };
  AbstractCoroutineContextKey.prototype.isSubKey = function (key) {
    return key === this ? true : this._topmostKey === key;
  };
  AbstractCoroutineContextKey.$metadata$ = {
    simpleName: 'AbstractCoroutineContextKey',
    kind: 'class',
    interfaces: [Key_0]
  };
  function AbstractCoroutineContextElement(key) {
    this._key = key;
  }
  AbstractCoroutineContextElement.prototype._get_key__18 = function () {
    return this._key;
  };
  AbstractCoroutineContextElement.$metadata$ = {
    simpleName: 'AbstractCoroutineContextElement',
    kind: 'class',
    interfaces: [Element_0]
  };
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__2();
    return function (p1, p2) {
      return i.invoke_6(p1, p2);
    };
  }
  function size($this) {
    var cur = $this;
    var size_0 = 2;
    while (true) {
      var tmp = cur._left;
      var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return size_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      cur = tmp_0;
      var tmp1 = size_0;
      size_0 = tmp1 + 1 | 0;
      Unit_getInstance();
    }
  }
  function contains($this, element) {
    return equals($this.get_28(element._get_key__18()), element);
  }
  function containsAll($this, context) {
    var cur = context;
    while (true) {
      if (!contains($this, cur._element))
        return false;
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return contains($this, isInterface(next, Element_0) ? next : THROW_CCE());
        }
      }
    }
  }
  function _no_name_provided__2() {
  }
  _no_name_provided__2.prototype.invoke_6 = function (acc, element) {
    var tmp;
    if (charSequenceLength(acc) === 0) {
      tmp = toString_1(element);
    } else {
      {
        tmp = '' + acc + ', ' + element;
      }
    }
    return tmp;
  };
  _no_name_provided__2.prototype.invoke_66 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_6(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _get_COROUTINE_SUSPENDED_() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_3(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_3(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_2(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_3(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function Result(value) {
    this._value = value;
  }
  Result.prototype.toString = function () {
    var tmp = this;
    return toString_impl(tmp == null ? null : tmp._value);
  };
  Result.prototype.hashCode = function () {
    var tmp = this;
    return hashCode_impl(tmp == null ? null : tmp._value);
  };
  Result.prototype.equals = function (other) {
    var tmp = this;
    return equals_impl(tmp == null ? null : tmp._value, other);
  };
  Result.$metadata$ = {
    simpleName: 'Result',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function _get_value__impl(this_0) {
    return this_0;
  }
  function _get_isFailure__impl(this_0) {
    var tmp = _get_value__impl(this_0);
    return tmp instanceof Failure;
  }
  function exceptionOrNull_impl(this_0) {
    var tmp0_subject = _get_value__impl(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _get_value__impl(this_0)._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function toString_impl(this_0) {
    var tmp0_subject = _get_value__impl(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = toString_1(_get_value__impl(this_0));
    } else {
      {
        tmp = '' + 'Success(' + _get_value__impl(this_0) + ')';
      }
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_2 = this;
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals(this._exception, other._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function hashCode_impl(this_0) {
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function equals_impl(this_0, other) {
    if (!(other instanceof Result))
      return false;
    else {
    }
    var tmp;
    if (other instanceof Result) {
      var tmp_0 = other;
      tmp = tmp_0 == null ? null : tmp_0._value;
    } else {
      tmp = THROW_CCE();
    }
    var tmp0_other_with_cast = tmp;
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function arrayCopy_0(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkRangeIndexes(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().checkRangeIndexes(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (ArrayBuffer.isView(destination) && ArrayBuffer.isView(source)) {
      var subrange = source.subarray(startIndex, endIndex);
      destination.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        var last = rangeSize - 1 | 0;
        if (!(rangeSize === -2147483648) ? inductionVariable <= last : false)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable <= last);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        var last_0 = 0;
        if (last_0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (last_0 <= inductionVariable_0);
      }
    }
  }
  function copyToArrayImpl_0(collection) {
    var array = [];
    var iterator = collection.iterator_21();
    while (iterator.hasNext_3()) {
      array.push(iterator.next_3());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__0 = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0 = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.iterator_21 = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_9 = function (element) {
    return this.indexOf_0(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_0 = function (element) {
    var inductionVariable = 0;
    var last = _get_lastIndex__0(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.get_39(index), element)) {
          return index;
        }}
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function IteratorImpl($outer) {
    this._$this_1 = $outer;
    this._index = 0;
    this._last = -1;
  }
  IteratorImpl.prototype.hasNext_3 = function () {
    return this._index < this._$this_1._get_size__15();
  };
  IteratorImpl.prototype.next_3 = function () {
    if (!this.hasNext_3())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last = tmp1;
    return this._$this_1.get_39(this._last);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype._get_keys__0 = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__4(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function _no_name_provided__3($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__3.prototype.hasNext_3 = function () {
    return this._$entryIterator.hasNext_3();
  };
  _no_name_provided__3.prototype.next_3 = function () {
    return this._$entryIterator.next_3()._get_key__18();
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key_0 = key;
    this.__value = value;
  }
  SimpleEntry.prototype._get_key__18 = function () {
    return this._key_0;
  };
  SimpleEntry.prototype._get_value__4 = function () {
    return this.__value;
  };
  SimpleEntry.prototype.setValue_0 = function (newValue) {
    var oldValue = this.__value;
    this.__value = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function _no_name_provided__4($this) {
    this._$this_2 = $this;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__4.prototype.add_0 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__4.prototype.add_8 = function (element) {
    return this.add_0((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__4.prototype.contains_11 = function (element) {
    return this._$this_2.containsKey_2(element);
  };
  _no_name_provided__4.prototype.contains_9 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_11((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__4.prototype.iterator_21 = function () {
    var entryIterator = this._$this_2._get_entries__2().iterator_21();
    return new _no_name_provided__3(entryIterator);
  };
  _no_name_provided__4.prototype._get_size__15 = function () {
    return this._$this_2._get_size__15();
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__15 = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_39 = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.set_2 = function (index, element) {
    this.checkIsMutable();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_apply_0 = this._array[index];
    this._array[index] = element;
    var tmp = tmp0_apply_0;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_8 = function (element) {
    this.checkIsMutable();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_4 = function (index, element) {
    this.checkIsMutable();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.indexOf_0 = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0 = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0();
  };
  ArrayList.prototype.checkIsMutable = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function ArrayList_init_$Init$(initialCapacity, $this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$(initialCapacity) {
    return ArrayList_init_$Init$(initialCapacity, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__15());
    return index;
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__15());
    return index;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_1 = function (value1, value2) {
    return equals(value1, value2);
  };
  HashCode.prototype.getHashCode_0 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  HashMap.prototype.containsKey_2 = function (key) {
    return this._internalMap.contains_11(key);
  };
  HashMap.prototype._get_entries__2 = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_14 = function (key) {
    return this._internalMap.get_14(key);
  };
  HashMap.prototype.put_2 = function (key, value) {
    return this._internalMap.put_2(key, value);
  };
  HashMap.prototype._get_size__15 = function () {
    return this._internalMap._get_size__15();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function EntrySet($outer) {
    this._$this_3 = $outer;
    AbstractMutableSet.call(this);
  }
  EntrySet.prototype.add_5 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_8 = function (element) {
    return this.add_5((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.contains_7 = function (element) {
    return this._$this_3.containsEntry_1(element);
  };
  EntrySet.prototype.contains_9 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    else {
    }
    return this.contains_7((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.iterator_21 = function () {
    return this._$this_3._internalMap.iterator_21();
  };
  EntrySet.prototype._get_size__15 = function () {
    return this._$this_3._get_size__15();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    var tmp0_require_0 = initialCapacity >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$(toString_1(message_1));
    }var tmp1_require_0 = loadFactor >= 0;
    if (!tmp1_require_0) {
      var message_1_0 = '' + 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
    }return $this;
  }
  function HashMap_init_$Create$(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  HashSet.prototype.add_8 = function (element) {
    var old = this._map.put_2(element, this);
    return old == null;
  };
  HashSet.prototype.contains_9 = function (element) {
    return this._map.containsKey_2(element);
  };
  HashSet.prototype.isEmpty_11 = function () {
    return this._map.isEmpty_11();
  };
  HashSet.prototype.iterator_21 = function () {
    return this._map._get_keys__0().iterator_21();
  };
  HashSet.prototype._get_size__15 = function () {
    return this._map._get_size__15();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function HashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_0(initialCapacity, $this) {
    HashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$(initialCapacity) {
    return HashSet_init_$Init$_0(initialCapacity, Object.create(HashSet.prototype));
  }
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0 = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__15 = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_2 = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_0(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_1(entry._get_key__18(), key)) {
          return entry.setValue_0(value);
        } else {
          var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
          this._backingMap[hashCode_1] = tmp0_arrayOf_0;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_0(value);
          }chain.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.contains_11 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_14 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__4();
  };
  InternalHashCodeMap.prototype.iterator_21 = function () {
    return new _no_name_provided__5(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp0_unsafeCast_0 = $this._chainOrEntry;
      var chainSize = tmp0_unsafeCast_0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._$this_4._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_0(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_1(entry._get_key__18(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if ($this._equality_0.equals_1(element_2._get_key__18(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__5($this) {
    this._$this_4 = $this;
    this._state = -1;
    this._keys = Object.keys(this._$this_4._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__5.prototype.hasNext_3 = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__5.prototype.next_3 = function () {
    if (!this.hasNext_3())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp0_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp0_unsafeCast_0[this._itemIndex];
    } else {
      var tmp1_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp1_unsafeCast_0;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0 = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
  }
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__2 = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals(this._get_jClass__2(), other._get_jClass__2());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__4();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__4 = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__2 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__4 = function () {
    var tmp0_error_0 = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp0_safe_receiver = jClass.$metadata$;
    var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp._simpleName_0 = tmp0_unsafeCast_0;
  }
  SimpleKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  var functionClasses;
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_3());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_4());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_5());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_6());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_7());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_8());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_9());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_10());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_11());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_12());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_13());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_14());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_15());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_16());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_17());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_18());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_19());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_20());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_21());
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass_ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass_ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass_ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass_ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass_ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass_ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass_ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass_ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass_ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass_ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass_ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = tmp0_unsafeCast_0_3;
      var tmp_1 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_22(arity));
      var tmp1_asDynamic_0_5 = functionClasses;
      tmp1_asDynamic_0_5[arity] = result_2;
      tmp = result_2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function _no_name_provided_$factory_22($arity) {
    var i = new _no_name_provided__25($arity);
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
  }
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_48 = function (it) {
    return isObject(it);
  };
  _no_name_provided__6.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_48 = function (it) {
    return isNumber(it);
  };
  _no_name_provided__7.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8() {
  }
  _no_name_provided__8.prototype.invoke_48 = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__8.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_48 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__9.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_48 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__10.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_48 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__11.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_48 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__12.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_48 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__13.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_48 = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__14.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_48 = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__15.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_48 = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__16.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_48 = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_48 = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_48 = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__19.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_48 = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_48 = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__21.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_48 = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__22.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_48 = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__23.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_48 = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__24.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__25.prototype.invoke_48 = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__25.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass);
    } else {
      tmp = getKClass1_0(jClass);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
        tmp = tmp0_unsafeCast_0;
        break;
      default:var tmp1_unsafeCast_0 = new ErrorKClass();
        tmp = tmp1_unsafeCast_0;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
      return tmp0_unsafeCast_0;
    }var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance()._stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
        if (tmp0_asDynamic_0 === e) {
          tmp_0 = PrimitiveClasses_getInstance()._intClass;
        } else {
          {
            tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
          }
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance()._booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        tmp = tmp_1.functionClass(e.length);
        break;
      default:var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass_0(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                          } else {
                            {
                              var constructor = Object.getPrototypeOf(e).constructor;
                              var tmp_3;
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                              } else {
                                var jsClass_0 = constructor;
                                tmp_3 = getKClass1_0(jsClass_0);
                              }
                              tmp_2 = tmp_3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast_0 = tmp;
    return tmp1_unsafeCast_0;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0 = function () {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.length;
  };
  StringBuilder.prototype.append_2 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_3 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_4 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_5 = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function Char() {
  }
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Enum(name, ordinal) {
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0;
    return !(bufInt32[0] === 0) ? 1 : 0;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.length;
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a._get_length__0();
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_23(), 24, null);
  }
  function _no_name_provided__26() {
  }
  _no_name_provided__26.prototype.invoke_48 = function (it) {
    return toString_1(it);
  };
  _no_name_provided__26.prototype.invoke_68 = function (p1) {
    return this.invoke_48((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_23() {
    var i = new _no_name_provided__26();
    return function (p1) {
      return i.invoke_48(p1);
    };
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
    return tmp0_unsafeCast_0;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp0_unsafeCast_0 = o.toString();
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        if (obj) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp0_asDynamic_0 = 1;
          var tmp_1 = tmp0_asDynamic_0 / obj1;
          var tmp1_asDynamic_0 = 1;
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function unboxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp1_elvis_lhs = message;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        var tmp0_safe_receiver = cause;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var tmp2_elvis_lhs = tmp;
      this_.message = tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
  }
  function getContinuation() {
    throw Exception_init_$Create$('Implemented as intrinsic');
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function Long(low, high) {
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_28 = function (other) {
    return compare(this, other);
  };
  Long.prototype.plus_45 = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_27 = function (other) {
    return subtract(this, other);
  };
  Long.prototype.div_27 = function (other) {
    return divide(this, other);
  };
  Long.prototype.unaryMinus_4 = function () {
    return this.inv_0().plus_45(new Long(1, 0));
  };
  Long.prototype.inv_0 = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toInt_4 = function () {
    return this._low;
  };
  Long.prototype.toDouble_4 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_4();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_4());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_27(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_27(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_27(negate(other));
      } else {
        tmp = negate(negate(_this_).div_27(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_27(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta_0 = log2 <= 48.0 ? 1.0 : Math.pow(2, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta_0;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_27(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_4();
        var tmp = toStringImpl(div, radix);
        var tmp0_unsafeCast_0 = rem.toString(radix);
        return tmp + tmp0_unsafeCast_0;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_27(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_4();
      var tmp1_unsafeCast_0 = intval.toString(radix);
      var digits = tmp1_unsafeCast_0;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_4();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_4();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj);
    return tmp0_unsafeCast_0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function CoroutineImpl_0(resultContinuation) {
    this._resultContinuation = resultContinuation;
    this._state_0 = 0;
    this._exceptionState = 0;
    this._result = null;
    this._exception_0 = null;
    this._finallyPath = null;
    var tmp = this;
    var tmp0_safe_receiver = this._resultContinuation;
    tmp.__context = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__9();
    this._intercepted_ = null;
  }
  CoroutineImpl_0.prototype._set_state__1 = function (_set___) {
    this._state_0 = _set___;
  };
  CoroutineImpl_0.prototype._get_state__6 = function () {
    return this._state_0;
  };
  CoroutineImpl_0.prototype._set_exceptionState__1 = function (_set___) {
    this._exceptionState = _set___;
  };
  CoroutineImpl_0.prototype._get_exceptionState__1 = function () {
    return this._exceptionState;
  };
  CoroutineImpl_0.prototype._set_result__1 = function (_set___) {
    this._result = _set___;
  };
  CoroutineImpl_0.prototype._get_result__1 = function () {
    return this._result;
  };
  CoroutineImpl_0.prototype._set_exception__1 = function (_set___) {
    this._exception_0 = _set___;
  };
  CoroutineImpl_0.prototype._get_exception__1 = function () {
    return this._exception_0;
  };
  CoroutineImpl_0.prototype._set_finallyPath__1 = function (_set___) {
    this._finallyPath = _set___;
  };
  CoroutineImpl_0.prototype._get_finallyPath__1 = function () {
    return this._finallyPath;
  };
  CoroutineImpl_0.prototype._get_context__9 = function () {
    return ensureNotNull(this.__context);
  };
  CoroutineImpl_0.prototype.intercepted_1 = function () {
    var tmp2_elvis_lhs = this._intercepted_;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp0_safe_receiver = this._get_context__9().get_28(Key_getInstance());
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interceptContinuation_9(this);
      var tmp0_also_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
      this._intercepted_ = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl_0.prototype.resumeWith_10 = function (result) {
    var current = this;
    var tmp;
    if (_get_isFailure__impl(result)) {
      tmp = null;
    } else {
      var tmp_0 = _get_value__impl(result);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var currentResult = tmp;
    var currentException = exceptionOrNull_impl(result);
    while (true) {
      var tmp0_with_0 = current;
      if (currentException == null) {
        tmp0_with_0._result = currentResult;
      } else {
        tmp0_with_0._state_0 = tmp0_with_0._exceptionState;
        tmp0_with_0._exception_0 = currentException;
      }
      try {
        var outcome_2 = tmp0_with_0.doResume_3();
        if (outcome_2 === _get_COROUTINE_SUSPENDED_())
          return Unit_getInstance();
        currentResult = outcome_2;
        currentException = null;
      } catch ($p) {
        currentResult = null;
        currentException = $p;
      }
      releaseIntercepted(tmp0_with_0);
      var completion_4 = ensureNotNull(tmp0_with_0._resultContinuation);
      if (completion_4 instanceof CoroutineImpl_0) {
        current = completion_4;
      } else {
        {
          if (!(currentException == null)) {
            var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
            var tmp0_failure_0_1_6 = Companion_getInstance_2();
            completion_4.resumeWith_8(createFailure(tmp0_resumeWithException_0_5));
          } else {
            var tmp1_resume_0_7 = currentResult;
            var tmp0_success_0_1_8 = Companion_getInstance_2();
            completion_4.resumeWith_8(tmp1_resume_0_7);
          }
          return Unit_getInstance();
        }
      }
    }
  };
  CoroutineImpl_0.prototype.resumeWith_8 = function (result) {
    return this.resumeWith_10(result);
  };
  CoroutineImpl_0.prototype.create_5 = function (completion) {
    throw UnsupportedOperationException_init_$Create$_0('create(Continuation) has not been overridden');
  };
  CoroutineImpl_0.prototype.create_4 = function (value, completion) {
    throw UnsupportedOperationException_init_$Create$_0('create(Any?;Continuation) has not been overridden');
  };
  CoroutineImpl_0.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__9 = function () {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_10 = function (result) {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_8 = function (result) {
    return this.resumeWith_10(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function releaseIntercepted($this) {
    var intercepted_0 = $this._intercepted_;
    if (!(intercepted_0 == null) ? !(intercepted_0 === $this) : false) {
      ensureNotNull($this._get_context__9().get_28(Key_getInstance())).releaseInterceptedContinuation_9(intercepted_0);
    }$this._intercepted_ = CompletedContinuation_getInstance();
  }
  function intercepted(_this_) {
    var tmp0_safe_receiver = _this_ instanceof CoroutineImpl_0 ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intercepted_1();
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function createCoroutineUnintercepted(_this_, receiver, completion) {
    return new _no_name_provided__1_0(_this_, receiver, completion);
  }
  function _no_name_provided__1_0($this, $receiver, $completion) {
    this._$this_5 = $this;
    this._$receiver = $receiver;
    this._$completion = $completion;
    CoroutineImpl_0.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  _no_name_provided__1_0.prototype.doResume_2 = function () {
    if (this._get_exception__1() != null)
      throw this._get_exception__1();
    return this._$this_5(this._$receiver, this._$completion);
  };
  _no_name_provided__1_0.prototype.doResume_3 = function () {
    return this.doResume_2();
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: []
  };
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, null, null);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, null);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Error_init_$Init$(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message, cause) {
    var tmp = IllegalStateException_init_$Init$_0(message, cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function jsIn(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack in rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack | rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = typeof value_hack;
    return tmp0_unsafeCast_0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    delete obj_hack[property_hack];
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = obj_hack instanceof jsClass_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack & rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function AtomicRef(value) {
    this._value_0 = value;
  }
  AtomicRef.prototype._set_value_ = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicRef.prototype._get_value__4 = function () {
    return this._value_0;
  };
  AtomicRef.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicRef.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this._value_0);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__4,
    set: AtomicRef.prototype._set_value_
  });
  function atomic(initial) {
    return new AtomicRef(initial);
  }
  function AtomicBoolean(value) {
    this._value_1 = value;
  }
  AtomicBoolean.prototype._set_value__0 = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicBoolean.prototype._get_value__4 = function () {
    return this._value_1;
  };
  AtomicBoolean.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicBoolean.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_1.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__4,
    set: AtomicBoolean.prototype._set_value__0
  });
  function atomic_0(initial) {
    return new AtomicBoolean(initial);
  }
  function AtomicInt(value) {
    this._value_2 = value;
  }
  AtomicInt.prototype._set_value__1 = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicInt.prototype._get_value__4 = function () {
    return this._value_2;
  };
  AtomicInt.prototype.compareAndSet$atomicfu = function (expect, update) {
    if (!(this._value_2 === expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicInt.prototype.getAndSet$atomicfu = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicInt.prototype.getAndIncrement$atomicfu = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.getAndDecrement$atomicfu = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.getAndAdd$atomicfu = function (delta_0) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta_0 | 0;
    return oldValue;
  };
  AtomicInt.prototype.addAndGet$atomicfu = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta_0 | 0;
    return this._value_2;
  };
  AtomicInt.prototype.incrementAndGet$atomicfu = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.decrementAndGet$atomicfu = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 - 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_2.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__4,
    set: AtomicInt.prototype._set_value__1
  });
  function atomic_1(initial) {
    return new AtomicInt(initial);
  }
  function AbstractCoroutine(parentContext, active) {
    JobSupport.call(this, active);
    this._parentContext = parentContext;
    this._context = this._parentContext.plus_17(this);
  }
  AbstractCoroutine.prototype._get_context__9 = function () {
    return this._context;
  };
  AbstractCoroutine.prototype._get_coroutineContext__3 = function () {
    return this._context;
  };
  AbstractCoroutine.prototype._get_isActive__15 = function () {
    return JobSupport.prototype._get_isActive__15.call(this);
  };
  AbstractCoroutine.prototype.initParentJob_1 = function () {
    this.initParentJobInternal_2(this._parentContext.get_28(Key_getInstance_1()));
  };
  AbstractCoroutine.prototype.onStart_1 = function () {
  };
  AbstractCoroutine.prototype.onStartInternal_2 = function () {
    this.onStart_1();
  };
  AbstractCoroutine.prototype.onCompleted_1 = function (value) {
  };
  AbstractCoroutine.prototype.onCancelled_1 = function (cause, handled) {
  };
  AbstractCoroutine.prototype.cancellationExceptionMessage_2 = function () {
    return '' + _get_classSimpleName_(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.onCompletionInternal_2 = function (state) {
    if (state instanceof CompletedExceptionally)
      this.onCancelled_1(state._cause, state._get_handled__0());
    else {
      {
        this.onCompleted_1((state == null ? true : isObject(state)) ? state : THROW_CCE());
      }
    }
  };
  AbstractCoroutine.prototype.resumeWith_8 = function (result) {
    var state = this.makeCompletingOnce_2(toState_0(result));
    if (state === COMPLETING_WAITING_CHILDREN)
      return Unit_getInstance();
    this.afterResume_1(state);
  };
  AbstractCoroutine.prototype.afterResume_1 = function (state) {
    return this.afterCompletion_2(state);
  };
  AbstractCoroutine.prototype.handleOnCompletionException_2 = function (exception) {
    handleCoroutineException(this._context, exception);
  };
  AbstractCoroutine.prototype.nameString_3 = function () {
    var tmp0_elvis_lhs = _get_coroutineName_(this._context);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.nameString_3.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '' + '"' + coroutineName + '":' + JobSupport.prototype.nameString_3.call(this);
  };
  AbstractCoroutine.prototype.start_4 = function (start, receiver, block) {
    this.initParentJob_1();
    start.invoke_51(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = {
    simpleName: 'AbstractCoroutine',
    kind: 'class',
    interfaces: [Job, Continuation, CoroutineScope]
  };
  function async(_this_, context, start, block) {
    var newContext = newCoroutineContext(_this_, context);
    var coroutine = start._get_isLazy_() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_4(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, active);
  }
  DeferredCoroutine.prototype.getCompleted_1 = function () {
    var tmp = this.getCompletedInternal_1();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  DeferredCoroutine.$metadata$ = {
    simpleName: 'DeferredCoroutine',
    kind: 'class',
    interfaces: [Deferred, SelectClause1]
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this._continuation = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.onStart_1 = function () {
    startCoroutineCancellable_0(this._continuation, this);
  };
  LazyDeferredCoroutine.$metadata$ = {
    simpleName: 'LazyDeferredCoroutine',
    kind: 'class',
    interfaces: []
  };
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = {
    simpleName: 'CancellableContinuation',
    kind: 'interface',
    interfaces: [Continuation]
  };
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this._delegate = delegate;
    this._context_0 = this._delegate._get_context__9();
    this.__decision = atomic_1(0);
    this.__state = atomic(Active_getInstance());
    this.__parentHandle = atomic(null);
  }
  CancellableContinuationImpl.prototype._get_delegate__1 = function () {
    return this._delegate;
  };
  CancellableContinuationImpl.prototype._get_context__9 = function () {
    return this._context_0;
  };
  CancellableContinuationImpl.prototype._get_state__6 = function () {
    return this.__state._value_0;
  };
  CancellableContinuationImpl.prototype._get_isCompleted__3 = function () {
    var tmp = this._get_state__6();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.initCancellability = function () {
    setupCancellation(this);
  };
  CancellableContinuationImpl.prototype.takeState_1 = function () {
    return this._get_state__6();
  };
  CancellableContinuationImpl.prototype.cancelResult_1 = function (state, cause) {
    if (state instanceof CompletedWithCancellation) {
      try {
        state._onCancellation(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          handleCoroutineException(this._get_context__9(), new CompletionHandlerException('' + 'Exception in cancellation handler for ' + this, $p));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
    }
  };
  CancellableContinuationImpl.prototype.cancel = function (cause) {
    var tmp0_loop_0 = this.__state;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp1__anonymous__1 = tmp0_loop_0._value_0;
        if (!(!(tmp1__anonymous__1 == null) ? isInterface(tmp1__anonymous__1, NotCompleted) : false))
          return false;
        else {
        }
        var update_2 = new CancelledContinuation(this, cause, tmp1__anonymous__1 instanceof CancelHandler);
        if (!this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, update_2)) {
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        }if (tmp1__anonymous__1 instanceof CancelHandler) {
          try {
            tmp1__anonymous__1.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              handleCoroutineException(this._get_context__9(), new CompletionHandlerException('' + 'Exception in cancellation handler for ' + this, $p));
            } else {
              {
                throw $p;
              }
            }
          }
        } else {
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, 0);
        return true;
      }
       while (false);
    }
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.parentCancelled_2 = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel(cause);
    Unit_getInstance();
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause = function (parent) {
    return parent.getCancellationException_3();
  };
  CancellableContinuationImpl.prototype.getResult = function () {
    setupCancellation(this);
    if (trySuspend(this))
      return _get_COROUTINE_SUSPENDED_();
    var state = this._get_state__6();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state._cause, this);
    else {
    }
    if (this._get_resumeMode__0() === 1) {
      var job = this._get_context__9().get_28(Key_getInstance_1());
      if (!(job == null) ? !job._get_isActive__15() : false) {
        var cause = job.getCancellationException_3();
        this.cancelResult_1(state, cause);
        throw recoverStackTrace(cause, this);
      }}return this.getSuccessfulResult_1(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_8 = function (result) {
    resumeImpl(this, toState(result, this), this._get_resumeMode__0());
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_0 = function (handler) {
    var handleCache = null;
    var tmp0_loop_0 = this.__state;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (tmp0_subject_2 instanceof Active) {
        var tmp1_elvis_lhs_4 = handleCache;
        var tmp;
        if (tmp1_elvis_lhs_4 == null) {
          var tmp0_also_0_5 = makeHandler(this, handler);
          handleCache = tmp0_also_0_5;
          tmp = tmp0_also_0_5;
        } else {
          tmp = tmp1_elvis_lhs_4;
        }
        var node_3 = tmp;
        if (this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, node_3))
          return Unit_getInstance();
      } else {
        if (tmp0_subject_2 instanceof CancelHandler)
          multipleHandlersError(this, handler, tmp1__anonymous__1);
        else {
          if (tmp0_subject_2 instanceof CancelledContinuation) {
            if (!tmp1__anonymous__1.makeHandled_0())
              multipleHandlersError(this, handler, tmp1__anonymous__1);
            try {
              var tmp0_safe_receiver_3_6 = tmp1__anonymous__1 instanceof CompletedExceptionally ? tmp1__anonymous__1 : null;
              invokeIt(handler, tmp0_safe_receiver_3_6 == null ? null : tmp0_safe_receiver_3_6._cause);
            } catch ($p) {
              if ($p instanceof Error) {
                handleCoroutineException(this._get_context__9(), new CompletionHandlerException('' + 'Exception in cancellation handler for ' + this, $p));
              } else {
                {
                  throw $p;
                }
              }
            }
            return Unit_getInstance();
          } else {
            {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.detachChild = function () {
    var handle = _get_parentHandle_(this);
    var tmp0_safe_receiver = handle;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dispose_9();
      Unit_getInstance();
    }
    Unit_getInstance();
    _set_parentHandle_(this, NonDisposableHandle_getInstance());
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_0 = function (_this__0, value) {
    var tmp = this._delegate;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver._dispatcher) === _this__0) {
      tmp_0 = 2;
    } else {
      {
        tmp_0 = this._get_resumeMode__0();
      }
    }
    resumeImpl(this, value, tmp_0);
    Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_1 = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedIdempotentResult) {
      var tmp_0 = state._result_0;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      if (tmp0_subject instanceof CompletedWithCancellation) {
        var tmp_1 = state._result_1;
        tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      } else {
        {
          tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
        }
      }
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return '' + this.nameString_3() + '(' + toDebugString(this._delegate) + '){' + this._get_state__6() + '}@' + _get_hexAddress_(this);
  };
  CancellableContinuationImpl.prototype.nameString_3 = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {
    simpleName: 'CancellableContinuationImpl',
    kind: 'class',
    interfaces: [CancellableContinuation, CoroutineStackFrame]
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {
    simpleName: 'CancelHandler',
    kind: 'class',
    interfaces: [NotCompleted]
  };
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {
    simpleName: 'Active',
    kind: 'object',
    interfaces: [NotCompleted]
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {
    simpleName: 'NotCompleted',
    kind: 'interface',
    interfaces: []
  };
  function CompletedIdempotentResult() {
  }
  CompletedIdempotentResult.$metadata$ = {
    simpleName: 'CompletedIdempotentResult',
    kind: 'class',
    interfaces: []
  };
  function CompletedWithCancellation() {
  }
  CompletedWithCancellation.$metadata$ = {
    simpleName: 'CompletedWithCancellation',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this._handler = handler;
  }
  InvokeOnCancel.prototype.invoke_67 = function (cause) {
    this._handler(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_67(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return '' + 'InvokeOnCancel[' + _get_classSimpleName_(this._handler) + '@' + _get_hexAddress_(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {
    simpleName: 'InvokeOnCancel',
    kind: 'class',
    interfaces: []
  };
  function _set_parentHandle_($this, value) {
    $this.__parentHandle._value_0 = value;
  }
  function _get_parentHandle_($this) {
    return $this.__parentHandle._value_0;
  }
  function isReusable($this) {
    var tmp;
    var tmp_0 = $this._delegate;
    if (tmp_0 instanceof DispatchedContinuation) {
      tmp = $this._delegate.isReusable($this);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function setupCancellation($this) {
    if (checkCompleted($this))
      return Unit_getInstance();
    if (!(_get_parentHandle_($this) === null))
      return Unit_getInstance();
    var tmp0_elvis_lhs = $this._delegate._get_context__9().get_28(Key_getInstance_1());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    parent.start_7();
    Unit_getInstance();
    var tmp0__get_asHandler__0 = new ChildContinuation(parent, $this);
    var handle = parent.invokeOnCompletion$default_3(true, false, tmp0__get_asHandler__0, 2, null);
    _set_parentHandle_($this, handle);
    if ($this._get_isCompleted__3() ? !isReusable($this) : false) {
      handle.dispose_9();
      _set_parentHandle_($this, NonDisposableHandle_getInstance());
    }}
  function checkCompleted($this) {
    var completed = $this._get_isCompleted__3();
    if (!($this._get_resumeMode__0() === 0))
      return completed;
    var tmp = $this._delegate;
    var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return completed;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var dispatched = tmp_0;
    var tmp1_elvis_lhs = dispatched.checkPostponedCancellation($this);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return completed;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var cause = tmp_1;
    if (!completed) {
      $this.cancel(cause);
      Unit_getInstance();
    }return true;
  }
  function cancelLater($this, cause) {
    if (!($this._get_resumeMode__0() === 0))
      return false;
    var tmp = $this._delegate;
    var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var dispatched = tmp_0;
    return dispatched.postponeCancellation(cause);
  }
  function trySuspend($this) {
    var tmp0_loop_0 = $this.__decision;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_2;
      var tmp0_subject_2 = tmp1__anonymous__1;
      switch (tmp0_subject_2) {
        case 0:
          if ($this.__decision.compareAndSet$atomicfu(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:var tmp0_error_0_3 = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
      }
    }
    Unit_getInstance();
  }
  function tryResume($this) {
    var tmp0_loop_0 = $this.__decision;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_2;
      var tmp0_subject_2 = tmp1__anonymous__1;
      switch (tmp0_subject_2) {
        case 0:
          if ($this.__decision.compareAndSet$atomicfu(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:var tmp0_error_0_3 = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0_3));
      }
    }
    Unit_getInstance();
  }
  function multipleHandlersError($this, handler, state) {
    var tmp0_error_0 = '' + "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + state;
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function makeHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      {
        tmp = new InvokeOnCancel(handler);
      }
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumeImpl($this, proposedUpdate, resumeMode) {
    var tmp0_loop_0 = $this.__state;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp1__anonymous__1 = tmp0_loop_0._value_0;
        var tmp0_subject_2 = tmp1__anonymous__1;
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
          if (!$this.__state.compareAndSet$atomicfu(tmp1__anonymous__1, proposedUpdate)) {
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return null;
        } else {
          if (tmp0_subject_2 instanceof CancelledContinuation) {
            if (tmp1__anonymous__1.makeResumed())
              return tmp1__anonymous__1;
          } else {
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
       while (false);
    }
    Unit_getInstance();
  }
  function alreadyResumedError($this, proposedUpdate) {
    var tmp0_error_0 = '' + 'Already resumed, but proposed with update ' + proposedUpdate;
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.detachChild();
  }
  function CompletedExceptionally(cause, handled) {
    this._cause = cause;
    this.__handled = atomic_0(handled);
  }
  CompletedExceptionally.prototype._get_handled__0 = function () {
    return this.__handled._value_1;
  };
  CompletedExceptionally.prototype.makeHandled_0 = function () {
    return this.__handled.compareAndSet$atomicfu(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '[' + this._cause + ']';
  };
  CompletedExceptionally.$metadata$ = {
    simpleName: 'CompletedExceptionally',
    kind: 'class',
    interfaces: []
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('' + 'Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.__resumed = atomic_0(false);
  }
  CancelledContinuation.prototype.makeResumed = function () {
    return this.__resumed.compareAndSet$atomicfu(false, true);
  };
  CancelledContinuation.$metadata$ = {
    simpleName: 'CancelledContinuation',
    kind: 'class',
    interfaces: []
  };
  function toState(_this_, caller) {
    var exception_1 = exceptionOrNull_impl(_this_);
    var tmp;
    if (exception_1 == null) {
      var tmp_0 = _get_value__impl(_this_);
      var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = tmp0__anonymous__2;
    } else {
      var tmp_1 = recoverStackTrace(exception_1, caller);
      tmp = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
    }
    return tmp;
  }
  function toState_0(_this_) {
    var exception_1 = exceptionOrNull_impl(_this_);
    var tmp;
    if (exception_1 == null) {
      var tmp_0 = _get_value__impl(_this_);
      var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = tmp0__anonymous__2;
    } else {
      tmp = CompletedExceptionally_init_$Create$(exception_1, false, 2, null);
    }
    return tmp;
  }
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    var handled_0 = !(($mask0 & 2) === 0) ? false : handled;
    CompletedExceptionally.call($this, cause, handled_0);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CoroutineDispatcher() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_8 = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.interceptContinuation_9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_9 = function (continuation) {
    var tmp0_safe_receiver = (continuation instanceof DispatchedContinuation ? continuation : THROW_CCE())._get_reusableCancellableContinuation_();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild();
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this);
  };
  CoroutineDispatcher.$metadata$ = {
    simpleName: 'CoroutineDispatcher',
    kind: 'class',
    interfaces: [ContinuationInterceptor]
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_28(Key_getInstance_0());
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.handleException__error(context, exception);
        return Unit_getInstance();
      }
      Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp0_apply_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    return tmp0_apply_0;
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_0;
  function Key_getInstance_0() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = {
    simpleName: 'CoroutineScope',
    kind: 'interface',
    interfaces: []
  };
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype._get_coroutineContext__3 = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = {
    simpleName: 'GlobalScope',
    kind: 'object',
    interfaces: [CoroutineScope]
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.invoke_51 = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp;
    if (tmp0_subject.equals(CoroutineStart_DEFAULT_getInstance())) {
      tmp = startCoroutineCancellable(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_ATOMIC_getInstance())) {
      tmp = startCoroutine(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_UNDISPATCHED_getInstance())) {
      tmp = startCoroutineUndispatched(block, receiver, completion);
    } else if (tmp0_subject.equals(CoroutineStart_LAZY_getInstance())) {
      tmp = Unit_getInstance();
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  CoroutineStart.prototype._get_isLazy_ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = {
    simpleName: 'CoroutineStart',
    kind: 'class',
    interfaces: []
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = {
    simpleName: 'CopyableThrowable',
    kind: 'interface',
    interfaces: []
  };
  function Deferred() {
  }
  Deferred.$metadata$ = {
    simpleName: 'Deferred',
    kind: 'interface',
    interfaces: [Job]
  };
  function delay(timeMillis, $cont) {
    if (timeMillis.compareTo_28(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp0__anonymous__1_1 = $cont;
    var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
    cancellable_2_2.initCancellability();
    _get_delay_(cancellable_2_2._get_context__9()).scheduleResumeAfterDelay_3(timeMillis, cancellable_2_2);
    return cancellable_2_2.getResult();
  }
  function Delay() {
  }
  Delay.$metadata$ = {
    simpleName: 'Delay',
    kind: 'interface',
    interfaces: []
  };
  function _get_delay_(_this_) {
    var tmp = _this_.get_28(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? _get_DefaultDelay_() : tmp0_elvis_lhs;
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this._useCount = new Long(0, 0);
    this._shared = false;
    this._unconfinedQueue = null;
  }
  EventLoop.prototype.processUnconfinedEvent_0 = function () {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_2();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_3();
    return true;
  };
  EventLoop.prototype.dispatchUnconfined_0 = function (task) {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = new ArrayQueue();
      this._unconfinedQueue = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_7(task);
  };
  EventLoop.prototype._get_isUnconfinedLoopActive__0 = function () {
    return this._useCount.compareTo_28(delta(this, true)) >= 0;
  };
  EventLoop.prototype._get_isUnconfinedQueueEmpty__0 = function () {
    var tmp0_safe_receiver = this._unconfinedQueue;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isEmpty__2();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_0 = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.plus_45(delta(this, unconfined));
    if (!unconfined)
      this._shared = true;
  };
  EventLoop.prototype.decrementUseCount_0 = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.minus_27(delta(this, unconfined));
    if (this._useCount.compareTo_28(new Long(0, 0)) > 0)
      return Unit_getInstance();
    if (this._shared) {
      this.shutdown_0();
    }};
  EventLoop.prototype.shutdown_0 = function () {
  };
  EventLoop.$metadata$ = {
    simpleName: 'EventLoop',
    kind: 'class',
    interfaces: []
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this._ref = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype._get_eventLoop_ = function () {
    var tmp0_elvis_lhs = this._ref.get_29();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance()._ref.set_3(tmp0_also_0);
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = {
    simpleName: 'ThreadLocalEventLoop',
    kind: 'object',
    interfaces: []
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$_1(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = {
    simpleName: 'CompletionHandlerException',
    kind: 'class',
    interfaces: []
  };
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = {
    simpleName: 'CoroutinesInternalError',
    kind: 'class',
    interfaces: []
  };
  function Job() {
  }
  Job.prototype.invokeOnCompletion$default_3 = function (onCancelling, invokeImmediately, handler, $mask0, $handler) {
    var onCancelling_0 = !(($mask0 & 1) === 0) ? false : onCancelling;
    var invokeImmediately_0 = !(($mask0 & 2) === 0) ? true : invokeImmediately;
    return $handler == null ? this.invokeOnCompletion_7(onCancelling_0, invokeImmediately_0, handler) : $handler(onCancelling_0, invokeImmediately_0, handler);
  };
  Job.$metadata$ = {
    simpleName: 'Job',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {
    simpleName: 'DisposableHandle',
    kind: 'interface',
    interfaces: []
  };
  function ChildJob() {
  }
  ChildJob.$metadata$ = {
    simpleName: 'ChildJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ParentJob() {
  }
  ParentJob.$metadata$ = {
    simpleName: 'ParentJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {
    simpleName: 'ChildHandle',
    kind: 'interface',
    interfaces: [DisposableHandle]
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose_9 = function () {
  };
  NonDisposableHandle.prototype.childCancelled_5 = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    simpleName: 'NonDisposableHandle',
    kind: 'object',
    interfaces: [DisposableHandle, ChildHandle]
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function Key_2() {
    Key_instance_1 = this;
    Key_getInstance_0();
    Unit_getInstance();
  }
  Key_2.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_1;
  function Key_getInstance_1() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  var COMPLETING_ALREADY;
  var COMPLETING_WAITING_CHILDREN;
  var COMPLETING_RETRY;
  var TOO_LATE_TO_CANCEL;
  var SEALED;
  var EMPTY_NEW;
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this._isActive = isActive;
  }
  Empty.prototype._get_isActive__15 = function () {
    return this._isActive;
  };
  Empty.prototype._get_list__10 = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return '' + 'Empty{' + (this._isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function Incomplete() {
  }
  Incomplete.$metadata$ = {
    simpleName: 'Incomplete',
    kind: 'interface',
    interfaces: []
  };
  function NodeList_0() {
    LinkedListHead.call(this);
  }
  NodeList_0.prototype._get_isActive__15 = function () {
    return true;
  };
  NodeList_0.prototype._get_list__10 = function () {
    return this;
  };
  NodeList_0.prototype.getString = function (state) {
    var tmp0_apply_0_1 = StringBuilder_init_$Create$();
    tmp0_apply_0_1.append_5('List{');
    Unit_getInstance();
    tmp0_apply_0_1.append_5(state);
    Unit_getInstance();
    tmp0_apply_0_1.append_5('}[');
    Unit_getInstance();
    var first_3 = true;
    var cur_1_4 = this._get__next__1();
    while (!equals(cur_1_4, this)) {
      if (cur_1_4 instanceof JobNode) {
        var tmp0__anonymous__2_5 = cur_1_4;
        if (first_3)
          first_3 = false;
        else {
          tmp0_apply_0_1.append_5(', ');
          Unit_getInstance();
        }
        tmp0_apply_0_1.append_4(tmp0__anonymous__2_5);
        Unit_getInstance();
      } else {
      }
      cur_1_4 = cur_1_4.__next;
    }
    tmp0_apply_0_1.append_5(']');
    Unit_getInstance();
    return tmp0_apply_0_1.toString();
  };
  NodeList_0.prototype.toString = function () {
    return DEBUG ? this.getString('Active') : anyToString(this);
  };
  NodeList_0.$metadata$ = {
    simpleName: 'NodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function JobNode(job) {
    CompletionHandlerBase.call(this);
    this._job = job;
  }
  JobNode.prototype._get_job__1 = function () {
    return this._job;
  };
  JobNode.prototype._get_isActive__15 = function () {
    return true;
  };
  JobNode.prototype._get_list__10 = function () {
    return null;
  };
  JobNode.prototype.dispose_9 = function () {
    var tmp = this._job;
    return (tmp instanceof JobSupport ? tmp : THROW_CCE()).removeNode_2(this);
  };
  JobNode.$metadata$ = {
    simpleName: 'JobNode',
    kind: 'class',
    interfaces: [DisposableHandle, Incomplete]
  };
  function JobSupport(active) {
    this.__state_0 = atomic(active ? EMPTY_ACTIVE : EMPTY_NEW);
    this.__parentHandle_0 = atomic(null);
  }
  JobSupport.prototype._get_key__18 = function () {
    return Key_getInstance_1();
  };
  JobSupport.prototype._set_parentHandle__2 = function (value) {
    this.__parentHandle_0._value_0 = value;
  };
  JobSupport.prototype._get_parentHandle__2 = function () {
    return this.__parentHandle_0._value_0;
  };
  JobSupport.prototype.initParentJobInternal_2 = function (parent) {
    if (parent == null) {
      this._set_parentHandle__2(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }parent.start_7();
    Unit_getInstance();
    var handle = parent.attachChild_3(this);
    this._set_parentHandle__2(handle);
    if (this._get_isCompleted__3()) {
      handle.dispose_9();
      this._set_parentHandle__2(NonDisposableHandle_getInstance());
    }};
  JobSupport.prototype._get_state__6 = function () {
    var tmp0_loop_0 = this.__state_0;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      if (!(tmp1__anonymous__1 instanceof OpDescriptor))
        return tmp1__anonymous__1;
      else {
      }
      tmp1__anonymous__1.perform(this);
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  JobSupport.prototype._get_isActive__15 = function () {
    var state = this._get_state__6();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state._get_isActive__15();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_isCompleted__3 = function () {
    var tmp = this._get_state__6();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.start_7 = function () {
    while (true) {
      var tmp0__anonymous__1 = this._get_state__6();
      var tmp0_subject_2 = startInternal(this, tmp0__anonymous__1);
      if (tmp0_subject_2 === 0)
        return false;
      else if (tmp0_subject_2 === 1)
        return true;
    }
    Unit_getInstance();
  };
  JobSupport.prototype.onStartInternal_2 = function () {
  };
  JobSupport.prototype.getCancellationException_3 = function () {
    var state = this._get_state__6();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause_();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_2(tmp0_safe_receiver, '' + _get_classSimpleName_(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          var tmp_1 = state._cause;
          tmp = this.toCancellationException$default_2(tmp_1, null, 1, null);
        } else {
          {
            tmp = new JobCancellationException('' + _get_classSimpleName_(this) + ' has completed normally', null, this);
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_2 = function (_this__0, message) {
    var tmp0_elvis_lhs = _this__0 instanceof CancellationException ? _this__0 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_elvis_lhs_1 = message;
      tmp = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_2() : tmp0_elvis_lhs_1, _this__0, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_2 = function (_this__0, message, $mask0, $handler) {
    var message_0 = !(($mask0 & 1) === 0) ? null : message;
    return this.toCancellationException_2(_this__0, message_0);
  };
  JobSupport.prototype.invokeOnCompletion_6 = function (handler) {
    return this.invokeOnCompletion_7(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_7 = function (onCancelling, invokeImmediately, handler) {
    var nodeCache = null;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = this._get_state__6();
        var tmp0_subject_2 = tmp0__anonymous__1;
        if (tmp0_subject_2 instanceof Empty) {
          if (tmp0__anonymous__1._isActive) {
            var tmp1_elvis_lhs_4 = nodeCache;
            var tmp;
            if (tmp1_elvis_lhs_4 == null) {
              var tmp0_also_0_5 = makeNode(this, handler, onCancelling);
              nodeCache = tmp0_also_0_5;
              tmp = tmp0_also_0_5;
            } else {
              tmp = tmp1_elvis_lhs_4;
            }
            var node_3 = tmp;
            if (this.__state_0.compareAndSet$atomicfu(tmp0__anonymous__1, node_3))
              return node_3;
          } else
            promoteEmptyToNodeList(this, tmp0__anonymous__1);
        } else {
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
            var list_6 = tmp0__anonymous__1._get_list__10();
            if (list_6 == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__1 instanceof JobNode ? tmp0__anonymous__1 : THROW_CCE());
            } else {
              var rootCause_7 = null;
              var handle_8 = NonDisposableHandle_getInstance();
              var tmp_0;
              if (onCancelling) {
                tmp_0 = tmp0__anonymous__1 instanceof Finishing;
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                rootCause_7 = tmp0__anonymous__1._get_rootCause_();
                var tmp_1;
                if (rootCause_7 == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !tmp0__anonymous__1._get_isCompleting_();
                  } else {
                    {
                      tmp_2 = false;
                    }
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  var tmp0_elvis_lhs_3_10 = nodeCache;
                  var tmp_3;
                  if (tmp0_elvis_lhs_3_10 == null) {
                    var tmp0_also_0_4_11 = makeNode(this, handler, onCancelling);
                    nodeCache = tmp0_also_0_4_11;
                    tmp_3 = tmp0_also_0_4_11;
                  } else {
                    tmp_3 = tmp0_elvis_lhs_3_10;
                  }
                  var node_2_9 = tmp_3;
                  if (!addLastAtomic(this, tmp0__anonymous__1, list_6, node_2_9)) {
                    tmp$ret$0 = Unit_getInstance();
                    break l$ret$1;
                  }if (rootCause_7 == null)
                    return node_2_9;
                  handle_8 = node_2_9;
                } else {
                }
              } else {
              }
              if (!(rootCause_7 == null)) {
                if (invokeImmediately)
                  invokeIt(handler, rootCause_7);
                return handle_8;
              } else {
                var tmp2_elvis_lhs_13 = nodeCache;
                var tmp_4;
                if (tmp2_elvis_lhs_13 == null) {
                  var tmp1_also_0_14 = makeNode(this, handler, onCancelling);
                  nodeCache = tmp1_also_0_14;
                  tmp_4 = tmp1_also_0_14;
                } else {
                  tmp_4 = tmp2_elvis_lhs_13;
                }
                var node_12 = tmp_4;
                if (addLastAtomic(this, tmp0__anonymous__1, list_6, node_12))
                  return node_12;
              }
            }
          } else {
            {
              if (invokeImmediately) {
                var tmp3_safe_receiver_15 = tmp0__anonymous__1 instanceof CompletedExceptionally ? tmp0__anonymous__1 : null;
                invokeIt(handler, tmp3_safe_receiver_15 == null ? null : tmp3_safe_receiver_15._cause);
              }return NonDisposableHandle_getInstance();
            }
          }
        }
      }
       while (false);
    }
    Unit_getInstance();
  };
  JobSupport.prototype.removeNode_2 = function (node) {
    while (true) {
      var tmp0__anonymous__1 = this._get_state__6();
      var tmp0_subject_2 = tmp0__anonymous__1;
      if (tmp0_subject_2 instanceof JobNode) {
        if (!(tmp0__anonymous__1 === node))
          return Unit_getInstance();
        if (this.__state_0.compareAndSet$atomicfu(tmp0__anonymous__1, EMPTY_ACTIVE))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
          if (!(tmp0__anonymous__1._get_list__10() == null)) {
            node.remove_7();
            Unit_getInstance();
          }return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
    Unit_getInstance();
  };
  JobSupport.prototype._get_onCancelComplete__2 = function () {
    return false;
  };
  JobSupport.prototype.cancellationExceptionMessage_2 = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.parentCancelled_4 = function (parentJob) {
    this.cancelImpl_2(parentJob);
    Unit_getInstance();
  };
  JobSupport.prototype.childCancelled_5 = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    else {
    }
    return this.cancelImpl_2(cause) ? this._get_handlesException__2() : false;
  };
  JobSupport.prototype.cancelImpl_2 = function (cause) {
    var finalState = COMPLETING_ALREADY;
    if (this._get_onCancelComplete__2()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === COMPLETING_WAITING_CHILDREN)
        return true;
    }if (finalState === COMPLETING_ALREADY) {
      finalState = makeCancelling(this, cause);
    }var tmp;
    if (finalState === COMPLETING_ALREADY) {
      tmp = true;
    } else if (finalState === COMPLETING_WAITING_CHILDREN) {
      tmp = true;
    } else if (finalState === TOO_LATE_TO_CANCEL) {
      tmp = false;
    } else {
      this.afterCompletion_2(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.getChildJobCancellationCause_3 = function () {
    var state = this._get_state__6();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_rootCause_();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state._cause;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error_0 = '' + 'Cannot be cancelling child in this state: ' + state;
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('' + 'Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.makeCompletingOnce_2 = function (proposedUpdate) {
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = this._get_state__6();
        var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1, proposedUpdate);
        if (finalState_2 === COMPLETING_ALREADY)
          throw IllegalStateException_init_$Create$_0('' + 'Job ' + this + ' is already complete or completing, ' + ('' + 'but is being completed with ' + proposedUpdate), _get_exceptionOrNull_(proposedUpdate, this));
        else if (finalState_2 === COMPLETING_RETRY) {
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        } else
          return finalState_2;
      }
       while (false);
    }
    Unit_getInstance();
  };
  JobSupport.prototype.attachChild_3 = function (child) {
    var tmp0__get_asHandler__0 = new ChildHandleNode(this, child);
    var tmp = this.invokeOnCompletion$default_3(true, false, tmp0__get_asHandler__0, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_2 = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_2 = function (cause) {
  };
  JobSupport.prototype._get_isScopedCoroutine__2 = function () {
    return false;
  };
  JobSupport.prototype._get_handlesException__2 = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_2 = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_2 = function (state) {
  };
  JobSupport.prototype.afterCompletion_2 = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return '' + this.toDebugString_2() + '@' + _get_hexAddress_(this);
  };
  JobSupport.prototype.toDebugString_2 = function () {
    return '' + this.nameString_3() + '{' + stateString(this, this._get_state__6()) + '}';
  };
  JobSupport.prototype.nameString_3 = function () {
    return _get_classSimpleName_(this);
  };
  JobSupport.prototype.getCompletionExceptionOrNull_2 = function () {
    var state = this._get_state__6();
    var tmp0_check_0 = !(!(state == null) ? isInterface(state, Incomplete) : false);
    if (!tmp0_check_0) {
      var message_1 = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString_1(message_1));
    }return _get_exceptionOrNull_(state, this);
  };
  JobSupport.prototype.getCompletedInternal_1 = function () {
    var state = this._get_state__6();
    var tmp0_check_0 = !(!(state == null) ? isInterface(state, Incomplete) : false);
    if (!tmp0_check_0) {
      var message_1 = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString_1(message_1));
    }if (state instanceof CompletedExceptionally)
      throw state._cause;
    else {
    }
    return unboxState(state);
  };
  JobSupport.$metadata$ = {
    simpleName: 'JobSupport',
    kind: 'class',
    interfaces: [Job, ChildJob, ParentJob, SelectClause0]
  };
  function boxIncomplete(_this_) {
    var tmp;
    if (!(_this_ == null) ? isInterface(_this_, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this_);
    } else {
      {
        tmp = _this_;
      }
    }
    return tmp;
  }
  function JobCancellingNode(job) {
    JobNode.call(this, job);
  }
  JobCancellingNode.$metadata$ = {
    simpleName: 'JobCancellingNode',
    kind: 'class',
    interfaces: []
  };
  function InactiveNodeList(list) {
    this._list = list;
  }
  InactiveNodeList.prototype._get_list__10 = function () {
    return this._list;
  };
  InactiveNodeList.prototype._get_isActive__15 = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return DEBUG ? this._list.getString('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = {
    simpleName: 'InactiveNodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildHandleNode(parent, childJob) {
    JobCancellingNode.call(this, parent);
    this._childJob = childJob;
  }
  ChildHandleNode.prototype.invoke_67 = function (cause) {
    return this._childJob.parentCancelled_4(this._get_job__1());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_67(cause);
  };
  ChildHandleNode.prototype.childCancelled_5 = function (cause) {
    return this._get_job__1().childCancelled_5(cause);
  };
  ChildHandleNode.prototype.toString = function () {
    return '' + 'ChildHandle[' + this._childJob + ']';
  };
  ChildHandleNode.$metadata$ = {
    simpleName: 'ChildHandleNode',
    kind: 'class',
    interfaces: [ChildHandle]
  };
  function InvokeOnCancelling(job, handler) {
    JobCancellingNode.call(this, job);
    this._handler_0 = handler;
    this.__invoked = atomic_1(0);
  }
  InvokeOnCancelling.prototype.invoke_67 = function (cause) {
    if (this.__invoked.compareAndSet$atomicfu(0, 1))
      this._handler_0(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_67(cause);
  };
  InvokeOnCancelling.prototype.toString = function () {
    return '' + 'InvokeOnCancelling[' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) + ']';
  };
  InvokeOnCancelling.$metadata$ = {
    simpleName: 'InvokeOnCancelling',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCompletion(job, handler) {
    JobNode.call(this, job);
    this._handler_1 = handler;
  }
  InvokeOnCompletion.prototype.invoke_67 = function (cause) {
    return this._handler_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_67(cause);
  };
  InvokeOnCompletion.prototype.toString = function () {
    return '' + 'InvokeOnCompletion[' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) + ']';
  };
  InvokeOnCompletion.$metadata$ = {
    simpleName: 'InvokeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function unboxState(_this_) {
    var tmp0_safe_receiver = _this_ instanceof IncompleteStateBox ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._state_1;
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this._state_1 = state;
  }
  IncompleteStateBox.$metadata$ = {
    simpleName: 'IncompleteStateBox',
    kind: 'class',
    interfaces: []
  };
  function ChildContinuation(parent, child) {
    JobCancellingNode.call(this, parent);
    this._child = child;
  }
  ChildContinuation.prototype.invoke_67 = function (cause) {
    this._child.parentCancelled_2(this._child.getContinuationCancellationCause(this._get_job__1()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_67(cause);
  };
  ChildContinuation.prototype.toString = function () {
    return '' + 'ChildContinuation[' + this._child + ']';
  };
  ChildContinuation.$metadata$ = {
    simpleName: 'ChildContinuation',
    kind: 'class',
    interfaces: []
  };
  function _set_exceptionsHolder_($this, value) {
    $this.__exceptionsHolder._value_0 = value;
  }
  function _get_exceptionsHolder_($this) {
    return $this.__exceptionsHolder._value_0;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
    var wasCancelling = false;
    wasCancelling = state._get_isCancelling_();
    var exceptions_2 = state.sealLocked(proposedException);
    var finalCause_3 = getFinalRootCause($this, state, exceptions_2);
    if (!(finalCause_3 == null))
      addSuppressedExceptions($this, finalCause_3, exceptions_2);
    var finalException = finalCause_3;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_2(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_0();
        Unit_getInstance();
      }}if (!wasCancelling)
      $this.onCancelling_2(finalException);
    $this.onCompletionInternal_2(finalState);
    var casSuccess = $this.__state_0.compareAndSet$atomicfu(state, boxIncomplete(finalState));
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_11()) {
      if (state._get_isCancelling_()) {
        var tmp0_defaultCancellationException_0 = null;
        var tmp1_defaultCancellationException_0 = null;
        var tmp0_elvis_lhs_1 = tmp0_defaultCancellationException_0;
        return new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_2() : tmp0_elvis_lhs_1, tmp1_defaultCancellationException_0, $this);
      }return null;
    }var tmp$ret$0;
    l$ret$1: do {
      var tmp0_iterator_1 = exceptions.iterator_21();
      while (tmp0_iterator_1.hasNext_3()) {
        var element_2 = tmp0_iterator_1.next_3();
        if (!(element_2 instanceof CancellationException)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    var firstNonCancellation = tmp$ret$0;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_39(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$2;
      l$ret$3: do {
        var tmp0_iterator_1_0 = exceptions.iterator_21();
        while (tmp0_iterator_1_0.hasNext_3()) {
          var element_2_0 = tmp0_iterator_1_0.next_3();
          var tmp;
          if (!(element_2_0 === first)) {
            tmp = element_2_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$2 = element_2_0;
            break l$ret$3;
          } else {
          }
        }
        tmp$ret$2 = null;
      }
       while (false);
      var detailedTimeoutException = tmp$ret$2;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    } else {
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions._get_size__15() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions._get_size__15());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_21();
    while (tmp0_iterator.hasNext_3()) {
      var exception = tmp0_iterator.next_3();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_8(unwrapped);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
      } else {
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    if (!$this.__state_0.compareAndSet$atomicfu(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_2(null);
    $this.onCompletionInternal_2(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this._get_parentHandle__2();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dispose_9();
      $this._set_parentHandle__2(NonDisposableHandle_getInstance());
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._cause;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.handleOnCompletionException_2(new CompletionHandlerException('' + 'Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
      {
        var tmp2_safe_receiver = state._get_list__10();
        if (tmp2_safe_receiver == null)
          null;
        else {
          notifyCompletion(tmp2_safe_receiver, $this, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_2(cause);
    var exception_1 = null;
    var cur_1 = list._get__next__1();
    while (!equals(cur_1, list)) {
      if (cur_1 instanceof JobCancellingNode) {
        var tmp0__anonymous__2_2 = cur_1;
        try {
          tmp0__anonymous__2_2.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver_5_5 = exception_1;
            var tmp;
            if (tmp0_safe_receiver_5_5 == null) {
              tmp = null;
            } else {
              tmp = tmp0_safe_receiver_5_5;
            }
            var tmp1_elvis_lhs_4_4 = tmp;
            if (tmp1_elvis_lhs_4_4 == null) {
              exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
              Unit_getInstance();
            } else
              tmp1_elvis_lhs_4_4;
            Unit_getInstance();
          } else {
            {
              throw $p;
            }
          }
        }
      } else {
      }
      cur_1 = cur_1.__next;
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      $this.handleOnCompletionException_2(tmp0_safe_receiver_8);
      Unit_getInstance();
    }
    Unit_getInstance();
    cancelParent($this, cause);
    Unit_getInstance();
  }
  function cancelParent($this, cause) {
    if ($this._get_isScopedCoroutine__2())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this._get_parentHandle__2();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }return parent.childCancelled_5(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this_, $this, cause) {
    var exception_1 = null;
    var cur_1 = _this_._get__next__1();
    while (!equals(cur_1, _this_)) {
      if (cur_1 instanceof JobNode) {
        var tmp0__anonymous__2_2 = cur_1;
        try {
          tmp0__anonymous__2_2.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver_5_5 = exception_1;
            var tmp;
            if (tmp0_safe_receiver_5_5 == null) {
              tmp = null;
            } else {
              tmp = tmp0_safe_receiver_5_5;
            }
            var tmp1_elvis_lhs_4_4 = tmp;
            if (tmp1_elvis_lhs_4_4 == null) {
              exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
              Unit_getInstance();
            } else
              tmp1_elvis_lhs_4_4;
            Unit_getInstance();
          } else {
            {
              throw $p;
            }
          }
        }
      } else {
      }
      cur_1 = cur_1.__next;
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      $this.handleOnCompletionException_2(tmp0_safe_receiver_8);
      Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state._isActive)
        return 0;
      if (!$this.__state_0.compareAndSet$atomicfu(state, EMPTY_ACTIVE))
        return -1;
      $this.onStartInternal_2();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.__state_0.compareAndSet$atomicfu(state, state._list))
          return -1;
        $this.onStartInternal_2();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_safe_receiver = handler instanceof JobCancellingNode ? handler : null;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? new InvokeOnCancelling($this, handler) : tmp1_elvis_lhs;
    } else {
      var tmp2_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_1;
      if (tmp2_safe_receiver == null) {
        tmp_1 = null;
      } else {
        tmp_1 = tmp2_safe_receiver;
      }
      var tmp3_elvis_lhs = tmp_1;
      tmp = tmp3_elvis_lhs == null ? new InvokeOnCompletion($this, handler) : tmp3_elvis_lhs;
    }
    return tmp;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$0;
    l$ret$1: do {
      if (!($this._get_state__6() === expect)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      list.addLast_13(node);
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList_0();
    var update = state._isActive ? list : new InactiveNodeList(list);
    $this.__state_0.compareAndSet$atomicfu(state, update);
    Unit_getInstance();
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_6(new NodeList_0());
    Unit_getInstance();
    var list = state.__next;
    $this.__state_0.compareAndSet$atomicfu(state, list);
    Unit_getInstance();
  }
  function cancelMakeCompleting($this, cause) {
    while (true) {
      var tmp0__anonymous__1 = $this._get_state__6();
      var tmp;
      if (!(!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false)) {
        tmp = true;
      } else {
        {
          var tmp_0;
          if (tmp0__anonymous__1 instanceof Finishing) {
            tmp_0 = tmp0__anonymous__1._get_isCompleting_();
          } else {
            {
              tmp_0 = false;
            }
          }
          tmp = tmp_0;
        }
      }
      if (tmp) {
        return COMPLETING_ALREADY;
      } else {
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate_2 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState_3 = tryMakeCompleting($this, tmp0__anonymous__1, proposedUpdate_2);
      if (!(finalState_3 === COMPLETING_RETRY))
        return finalState_3;
    }
    Unit_getInstance();
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_defaultCancellationException_0 = null;
        var tmp1_defaultCancellationException_0 = null;
        var tmp0_elvis_lhs_1 = tmp0_defaultCancellationException_0;
        tmp_0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_2() : tmp0_elvis_lhs_1, tmp1_defaultCancellationException_0, $this);
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      {
        tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_3();
      }
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    while (true) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0__anonymous__1 = $this._get_state__6();
        var tmp0_subject_2 = tmp0__anonymous__1;
        if (tmp0_subject_2 instanceof Finishing) {
          if (tmp0__anonymous__1._get_isSealed_())
            return TOO_LATE_TO_CANCEL;
          var wasCancelling_2_4 = tmp0__anonymous__1._get_isCancelling_();
          if (!(cause == null) ? true : !wasCancelling_2_4) {
            var tmp0_elvis_lhs_4_6 = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs_4_6 == null) {
              var tmp0_also_0_5_7 = createCauseException($this, cause);
              causeExceptionCache = tmp0_also_0_5_7;
              tmp = tmp0_also_0_5_7;
            } else {
              tmp = tmp0_elvis_lhs_4_6;
            }
            var causeException_3_5 = tmp;
            tmp0__anonymous__1.addExceptionLocked(causeException_3_5);
          }var tmp1_takeIf_0_6_8 = tmp0__anonymous__1._get_rootCause_();
          var tmp_0;
          if (!wasCancelling_2_4) {
            tmp_0 = tmp1_takeIf_0_6_8;
          } else {
            {
              tmp_0 = null;
            }
          }
          var notifyRootCause_3 = tmp_0;
          var tmp1_safe_receiver_9 = notifyRootCause_3;
          if (tmp1_safe_receiver_9 == null)
            null;
          else {
            notifyCancelling($this, tmp0__anonymous__1._list_0, tmp1_safe_receiver_9);
            Unit_getInstance();
          }
          Unit_getInstance();
          return COMPLETING_ALREADY;
        } else {
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
            var tmp2_elvis_lhs_11 = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs_11 == null) {
              var tmp0_also_0_12 = createCauseException($this, cause);
              causeExceptionCache = tmp0_also_0_12;
              tmp_1 = tmp0_also_0_12;
            } else {
              tmp_1 = tmp2_elvis_lhs_11;
            }
            var causeException_10 = tmp_1;
            if (tmp0__anonymous__1._get_isActive__15()) {
              if (tryMakeCancelling($this, tmp0__anonymous__1, causeException_10))
                return COMPLETING_ALREADY;
            } else {
              var finalState_13 = tryMakeCompleting($this, tmp0__anonymous__1, CompletedExceptionally_init_$Create$(causeException_10, false, 2, null));
              if (finalState_13 === COMPLETING_ALREADY) {
                var tmp1_error_0_14 = '' + 'Cannot happen in ' + tmp0__anonymous__1;
                throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_14));
              } else if (finalState_13 === COMPLETING_RETRY) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              } else
                return finalState_13;
            }
          } else {
            return TOO_LATE_TO_CANCEL;
          }
        }
      }
       while (false);
    }
    Unit_getInstance();
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state._get_list__10();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList_0();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          {
            var tmp0_error_0 = '' + 'State should have list: ' + state;
            throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
          }
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.__state_0.compareAndSet$atomicfu(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return COMPLETING_ALREADY;
    else {
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      {
        tmp_1 = state instanceof JobNode;
      }
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }return COMPLETING_RETRY;
    } else {
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return COMPLETING_RETRY;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    if (finishing._get_isCompleting_())
      return COMPLETING_ALREADY;
    finishing._set_isCompleting_(true);
    if (!(finishing === state)) {
      if (!$this.__state_0.compareAndSet$atomicfu(state, finishing))
        return COMPLETING_RETRY;
    }var wasCancelling_2 = finishing._get_isCancelling_();
    var tmp0_safe_receiver_3 = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver_3 == null)
      null;
    else {
      finishing.addExceptionLocked(tmp0_safe_receiver_3._cause);
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp0_takeIf_0_4 = finishing._get_rootCause_();
    var tmp_0;
    if (!wasCancelling_2) {
      tmp_0 = tmp0_takeIf_0_4;
    } else {
      {
        tmp_0 = null;
      }
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      notifyCancelling($this, list, tmp2_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return COMPLETING_WAITING_CHILDREN;
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull_(_this_, $this) {
    var tmp0_safe_receiver = _this_ instanceof CompletedExceptionally ? _this_ : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state._get_list__10();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp0__get_asHandler__0 = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
      var handle = child_1._childJob.invokeOnCompletion$default_3(false, false, tmp0__get_asHandler__0, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      $this_0 = $this_1;
      state_0 = state_1;
      child_0 = nextChild_0;
      proposedUpdate_0 = proposedUpdate_1;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2(finalState);
  }
  function nextChild(_this_, $this) {
    var cur = _this_;
    while (true) {
      var tmp0__get_isRemoved__0 = cur;
      if (!tmp0__get_isRemoved__0.__removed) {
        break;
      }var tmp1__get_prevNode__0 = cur;
      cur = tmp1__get_prevNode__0.__prev;
    }
    while (true) {
      var tmp2__get_nextNode__0 = cur;
      cur = tmp2__get_nextNode__0.__next;
      var tmp3__get_isRemoved__0 = cur;
      if (tmp3__get_isRemoved__0.__removed)
        continue;
      else {
      }
      if (cur instanceof ChildHandleNode)
        return cur;
      else {
      }
      if (cur instanceof NodeList_0)
        return null;
      else {
      }
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_isCancelling_() ? 'Cancelling' : state._get_isCompleting_() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state._get_isActive__15() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          {
            tmp = 'Completed';
          }
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this._list_0 = list;
    this.__isCompleting = atomic_0(isCompleting);
    this.__rootCause = atomic(rootCause);
    this.__exceptionsHolder = atomic(null);
  }
  Finishing.prototype._get_list__10 = function () {
    return this._list_0;
  };
  Finishing.prototype._set_isCompleting_ = function (value) {
    this.__isCompleting._value_1 = value;
  };
  Finishing.prototype._get_isCompleting_ = function () {
    return this.__isCompleting._value_1;
  };
  Finishing.prototype._set_rootCause_ = function (value) {
    this.__rootCause._value_0 = value;
  };
  Finishing.prototype._get_rootCause_ = function () {
    return this.__rootCause._value_0;
  };
  Finishing.prototype._get_isSealed_ = function () {
    return _get_exceptionsHolder_(this) === SEALED;
  };
  Finishing.prototype._get_isCancelling_ = function () {
    return !(this._get_rootCause_() == null);
  };
  Finishing.prototype._get_isActive__15 = function () {
    return this._get_rootCause_() == null;
  };
  Finishing.prototype.sealLocked = function (proposedException) {
    var eh = _get_exceptionsHolder_(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp0_also_0 = allocateList(this);
        tmp0_also_0.add_8(eh);
        Unit_getInstance();
        tmp = tmp0_also_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
    var list = tmp;
    var rootCause = this._get_rootCause_();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      list.add_4(0, tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_8(proposedException);
      Unit_getInstance();
    }_set_exceptionsHolder_(this, SEALED);
    return list;
  };
  Finishing.prototype.addExceptionLocked = function (exception) {
    var rootCause = this._get_rootCause_();
    if (rootCause == null) {
      this._set_rootCause_(exception);
      return Unit_getInstance();
    }if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder_(this);
    if (eh == null)
      _set_exceptionsHolder_(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp0_apply_0 = allocateList(this);
        tmp0_apply_0.add_8(eh);
        Unit_getInstance();
        tmp0_apply_0.add_8(exception);
        Unit_getInstance();
        _set_exceptionsHolder_(this, tmp0_apply_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_8(exception);
          Unit_getInstance();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return '' + 'Finishing[cancelling=' + this._get_isCancelling_() + ', completing=' + this._get_isCompleting_() + ', rootCause=' + this._get_rootCause_() + ', exceptions=' + _get_exceptionsHolder_(this) + ', list=' + this._list_0 + ']';
  };
  Finishing.$metadata$ = {
    simpleName: 'Finishing',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this, child._childJob);
    this._parent = parent;
    this._state_2 = state;
    this._child_0 = child;
    this._proposedUpdate = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_67 = function (cause) {
    continueCompleting(this._parent, this._state_2, this._child_0, this._proposedUpdate);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_67(cause);
  };
  ChildCompletion.prototype.toString = function () {
    return '' + 'ChildCompletion[' + this._child_0 + ', ' + this._proposedUpdate + ']';
  };
  ChildCompletion.$metadata$ = {
    simpleName: 'ChildCompletion',
    kind: 'class',
    interfaces: []
  };
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0();
    return tmp0_elvis_lhs == null ? '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl_0 = function () {
    var main = Dispatchers_getInstance()._Main;
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main._get_immediate__0();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = {
    simpleName: 'MainCoroutineDispatcher',
    kind: 'class',
    interfaces: []
  };
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = {
    simpleName: 'TimeoutCancellationException',
    kind: 'class',
    interfaces: [CopyableThrowable]
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.isDispatchNeeded_8 = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_8 = function (context, block) {
    var yieldContext = context.get_28(Key_getInstance_2());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined__error = true;
      return Unit_getInstance();
    }throw UnsupportedOperationException_init_$Create$_0('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = {
    simpleName: 'Unconfined',
    kind: 'object',
    interfaces: []
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_2;
  function Key_getInstance_2() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp0_arrayOfNulls_0 = 16;
    tmp._elements = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
    this._head = 0;
    this._tail = 0;
  }
  ArrayQueue.prototype._get_isEmpty__2 = function () {
    return this._head === this._tail;
  };
  ArrayQueue.prototype.addLast_7 = function (element) {
    this._elements[this._tail] = element;
    this._tail = (this._tail + 1 | 0) & (this._elements.length - 1 | 0);
    if (this._tail === this._head)
      ensureCapacity(this);
  };
  ArrayQueue.prototype.removeFirstOrNull_2 = function () {
    if (this._head === this._tail)
      return null;
    var element = this._elements[this._head];
    this._elements[this._head] = null;
    this._head = (this._head + 1 | 0) & (this._elements.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = {
    simpleName: 'ArrayQueue',
    kind: 'class',
    interfaces: []
  };
  function ensureCapacity($this) {
    var currentSize = $this._elements.length;
    var newCapacity = currentSize << 1;
    var newElements = fillArrayVal(Array(newCapacity), null);
    var tmp0_copyInto_0 = $this._elements;
    var tmp1_copyInto_0 = $this._head;
    var tmp2_copyInto_0 = 0;
    var tmp3_copyInto_0 = tmp0_copyInto_0.length;
    arrayCopy_0(tmp0_copyInto_0, newElements, tmp2_copyInto_0, tmp1_copyInto_0, tmp3_copyInto_0);
    Unit_getInstance();
    var tmp4_copyInto_0 = $this._elements;
    var tmp5_copyInto_0 = $this._elements.length - $this._head | 0;
    var tmp6_copyInto_0 = $this._head;
    var tmp7_copyInto_0 = 0;
    arrayCopy_0(tmp4_copyInto_0, newElements, tmp5_copyInto_0, tmp7_copyInto_0, tmp6_copyInto_0);
    Unit_getInstance();
    $this._elements = newElements;
    $this._head = 0;
    $this._tail = currentSize;
  }
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = {
    simpleName: 'OpDescriptor',
    kind: 'class',
    interfaces: []
  };
  var UNDEFINED;
  var REUSABLE_CLAIMED;
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, 0);
    this._dispatcher = dispatcher;
    this._continuation_0 = continuation;
    this.__state_1 = UNDEFINED;
    var tmp = this;
    var tmp_0 = this._continuation_0;
    tmp._callerFrame = isInterface(tmp_0, CoroutineStackFrame) ? tmp_0 : null;
    this._countOrElement = threadContextElements(this._get_context__9());
    this.__reusableCancellableContinuation = atomic(null);
  }
  DispatchedContinuation.prototype._get_context__9 = function () {
    return this._continuation_0._get_context__9();
  };
  DispatchedContinuation.prototype._get_reusableCancellableContinuation_ = function () {
    var tmp = this.__reusableCancellableContinuation._value_0;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  };
  DispatchedContinuation.prototype.isReusable = function (requester) {
    var tmp0_elvis_lhs = this.__reusableCancellableContinuation._value_0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    if (value instanceof CancellableContinuationImpl)
      return value === requester;
    else {
    }
    return true;
  };
  DispatchedContinuation.prototype.checkPostponedCancellation = function (continuation) {
    var tmp0_loop_0 = this.__reusableCancellableContinuation;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      if (tmp1__anonymous__1 === REUSABLE_CLAIMED) {
        if (this.__reusableCancellableContinuation.compareAndSet$atomicfu(REUSABLE_CLAIMED, continuation))
          return null;
      } else {
        if (tmp1__anonymous__1 === null)
          return null;
        else {
          if (tmp1__anonymous__1 instanceof Error) {
            var tmp0_require_0_2 = this.__reusableCancellableContinuation.compareAndSet$atomicfu(tmp1__anonymous__1, null);
            if (!tmp0_require_0_2) {
              var message_2_1_3 = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString_1(message_2_1_3));
            }return tmp1__anonymous__1;
          } else {
            {
              var tmp1_error_0_4 = '' + 'Inconsistent state ' + tmp1__anonymous__1;
              throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_4));
            }
          }
        }
      }
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.postponeCancellation = function (cause) {
    var tmp0_loop_0 = this.__reusableCancellableContinuation;
    while (true) {
      var tmp1__anonymous__1 = tmp0_loop_0._value_0;
      var tmp0_subject_2 = tmp1__anonymous__1;
      if (equals(tmp0_subject_2, REUSABLE_CLAIMED)) {
        if (this.__reusableCancellableContinuation.compareAndSet$atomicfu(REUSABLE_CLAIMED, cause))
          return true;
      } else {
        if (tmp0_subject_2 instanceof Error)
          return true;
        else {
          {
            if (this.__reusableCancellableContinuation.compareAndSet$atomicfu(tmp1__anonymous__1, null))
              return false;
          }
        }
      }
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.takeState_1 = function () {
    var state = this.__state_1;
    this.__state_1 = UNDEFINED;
    return state;
  };
  DispatchedContinuation.prototype._get_delegate__1 = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_8 = function (result) {
    var context = this._continuation_0._get_context__9();
    var state = toState_0(result);
    if (this._dispatcher.isDispatchNeeded_8(context)) {
      this.__state_1 = state;
      this._set_resumeMode__0(0);
      this._dispatcher.dispatch_8(context, this);
    } else {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0_executeUnconfined_0 = 0;
        var tmp1_executeUnconfined_0 = false;
        var eventLoop_1 = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
        if (tmp1_executeUnconfined_0 ? eventLoop_1._get_isUnconfinedQueueEmpty__0() : false) {
          tmp$ret$0 = false;
          break l$ret$1;
        }var tmp;
        if (eventLoop_1._get_isUnconfinedLoopActive__0()) {
          this.__state_1 = state;
          this._set_resumeMode__0(tmp0_executeUnconfined_0);
          eventLoop_1.dispatchUnconfined_0(this);
          tmp = true;
        } else {
          eventLoop_1.incrementUseCount_0(true);
          try {
            var tmp0_withCoroutineContext_0_3 = this._get_context__9();
            var tmp1_withCoroutineContext_0_4 = this._countOrElement;
            this._continuation_0.resumeWith_8(result);
            while (true) {
              if (!eventLoop_1.processUnconfinedEvent_0())
                break;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.handleFatalException_1($p, null);
            } else {
              {
                throw $p;
              }
            }
          }
          finally {
            eventLoop_1.decrementUseCount_0(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
       while (false);
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return '' + 'DispatchedContinuation[' + this._dispatcher + ', ' + toDebugString(this._continuation_0) + ']';
  };
  DispatchedContinuation.$metadata$ = {
    simpleName: 'DispatchedContinuation',
    kind: 'class',
    interfaces: [CoroutineStackFrame, Continuation]
  };
  function resumeCancellableWith(_this_, result) {
    var tmp0_subject = _this_;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp0_resumeCancellableWith_0 = _this_;
      var state_1 = toState_0(result);
      var tmp_0;
      if (tmp0_resumeCancellableWith_0._dispatcher.isDispatchNeeded_8(tmp0_resumeCancellableWith_0._get_context__9())) {
        tmp0_resumeCancellableWith_0.__state_1 = state_1;
        tmp0_resumeCancellableWith_0._set_resumeMode__0(1);
        tmp_0 = tmp0_resumeCancellableWith_0._dispatcher.dispatch_8(tmp0_resumeCancellableWith_0._get_context__9(), tmp0_resumeCancellableWith_0);
      } else {
        var tmp$ret$0;
        l$ret$1: do {
          var tmp0_executeUnconfined_0_2 = 1;
          var tmp1_executeUnconfined_0_3 = false;
          var eventLoop_1_4 = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
          if (tmp1_executeUnconfined_0_3 ? eventLoop_1_4._get_isUnconfinedQueueEmpty__0() : false) {
            tmp$ret$0 = false;
            break l$ret$1;
          }var tmp_1;
          if (eventLoop_1_4._get_isUnconfinedLoopActive__0()) {
            tmp0_resumeCancellableWith_0.__state_1 = state_1;
            tmp0_resumeCancellableWith_0._set_resumeMode__0(tmp0_executeUnconfined_0_2);
            eventLoop_1_4.dispatchUnconfined_0(tmp0_resumeCancellableWith_0);
            tmp_1 = true;
          } else {
            eventLoop_1_4.incrementUseCount_0(true);
            try {
              var tmp$ret$2;
              l$ret$3: do {
                var job_1_3_5 = tmp0_resumeCancellableWith_0._get_context__9().get_28(Key_getInstance_1());
                if (!(job_1_3_5 == null) ? !job_1_3_5._get_isActive__15() : false) {
                  var tmp0_resumeWithException_0_4_6 = job_1_3_5.getCancellationException_3();
                  var tmp0_failure_0_1_5_7 = Companion_getInstance_2();
                  tmp0_resumeCancellableWith_0.resumeWith_8(createFailure(tmp0_resumeWithException_0_4_6));
                  tmp$ret$2 = true;
                  break l$ret$3;
                }tmp$ret$2 = false;
              }
               while (false);
              if (!tmp$ret$2) {
                var tmp1_withCoroutineContext_0_6_8 = tmp0_resumeCancellableWith_0._get_context__9();
                var tmp2_withCoroutineContext_0_7_9 = tmp0_resumeCancellableWith_0._countOrElement;
                tmp0_resumeCancellableWith_0._continuation_0.resumeWith_8(result);
              } else {
              }
              while (true) {
                if (!eventLoop_1_4.processUnconfinedEvent_0())
                  break;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp0_resumeCancellableWith_0.handleFatalException_1($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_1_4.decrementUseCount_0(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
         while (false);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      {
        tmp = _this_.resumeWith_8(result);
      }
    }
    return tmp;
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this._resumeMode = resumeMode;
  }
  DispatchedTask.prototype._set_resumeMode__0 = function (_set___) {
    this._resumeMode = _set___;
  };
  DispatchedTask.prototype._get_resumeMode__0 = function () {
    return this._resumeMode;
  };
  DispatchedTask.prototype.cancelResult_1 = function (state, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_1 = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_1 = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  };
  DispatchedTask.prototype.run_3 = function () {
    var taskContext = _get_taskContext_(this);
    var fatalException = null;
    try {
      var tmp = this._get_delegate__1();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate._continuation_0;
      var context = continuation._get_context__9();
      var state = this.takeState_1();
      var tmp0_withCoroutineContext_0 = delegate._countOrElement;
      var exception_2 = this.getExceptionalResult_1(state);
      var job_3 = _get_isCancellableMode_(this._resumeMode) ? context.get_28(Key_getInstance_1()) : null;
      if ((exception_2 == null ? !(job_3 == null) : false) ? !job_3._get_isActive__15() : false) {
        var cause_4 = job_3.getCancellationException_3();
        this.cancelResult_1(state, cause_4);
        var tmp0_failure_0_5 = Companion_getInstance_2();
        var tmp1_failure_0_6 = recoverStackTrace(cause_4, continuation);
        continuation.resumeWith_8(createFailure(tmp1_failure_0_6));
      } else {
        if (!(exception_2 == null)) {
          var tmp0_failure_0_1_7 = Companion_getInstance_2();
          continuation.resumeWith_8(createFailure(exception_2));
        } else {
          var tmp2_resume_0_8 = this.getSuccessfulResult_1(state);
          var tmp0_success_0_1_9 = Companion_getInstance_2();
          continuation.resumeWith_8(tmp2_resume_0_8);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      var tmp_0;
      try {
        var tmp0_success_0_1 = Companion_getInstance_2();
        var tmp1_success_0_2 = Unit_getInstance();
        tmp_0 = Unit_getInstance();
      } catch ($p_0) {
        var tmp_1;
        if ($p_0 instanceof Error) {
          var tmp2_failure_0_4 = Companion_getInstance_2();
          tmp_1 = createFailure($p_0);
        } else {
          {
            throw $p_0;
          }
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.handleFatalException_1(fatalException, exceptionOrNull_impl(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_1 = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
    }var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('' + 'Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this._get_delegate__1()._get_context__9(), reason);
  };
  DispatchedTask.$metadata$ = {
    simpleName: 'DispatchedTask',
    kind: 'class',
    interfaces: []
  };
  function _get_isCancellableMode_(_this_) {
    return _this_ === 1;
  }
  function dispatch(_this_, mode) {
    var delegate = _this_._get_delegate__1();
    var tmp;
    var tmp_0;
    if (_get_isDispatchedMode_(mode)) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _get_isCancellableMode_(mode) === _get_isCancellableMode_(_this_._resumeMode);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var dispatcher = delegate._dispatcher;
      var context = delegate._get_context__9();
      if (dispatcher.isDispatchNeeded_8(context)) {
        dispatcher.dispatch_8(context, _this_);
      } else {
        resumeUnconfined(_this_);
      }
    } else {
      {
        resume(_this_, delegate, mode);
      }
    }
  }
  function _get_isDispatchedMode_(_this_) {
    return _this_ === 0 ? true : _this_ === 1;
  }
  function resumeUnconfined(_this_) {
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop_();
    if (eventLoop._get_isUnconfinedLoopActive__0()) {
      eventLoop.dispatchUnconfined_0(_this_);
    } else {
      eventLoop.incrementUseCount_0(true);
      try {
        resume(_this_, _this_._get_delegate__1(), 2);
        while (true) {
          if (!eventLoop.processUnconfinedEvent_0())
            break;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this_.handleFatalException_1($p, null);
        } else {
          {
            throw $p;
          }
        }
      }
      finally {
        eventLoop.decrementUseCount_0(true);
      }
    }
  }
  function resume(_this_, delegate, useMode) {
    var state = _this_.takeState_1();
    var tmp0_safe_receiver = _this_.getExceptionalResult_1(state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = recoverStackTrace(tmp0_safe_receiver, delegate);
    }
    var exception = tmp;
    var tmp_0;
    if (!(exception == null)) {
      var tmp0_failure_0 = Companion_getInstance_2();
      tmp_0 = createFailure(exception);
    } else {
      var tmp1_success_0 = Companion_getInstance_2();
      var tmp2_success_0 = _this_.getSuccessfulResult_1(state);
      tmp_0 = tmp2_success_0;
    }
    var result = tmp_0;
    var tmp1_subject = useMode;
    switch (tmp1_subject) {
      case 0:
        delegate.resumeWith_8(result);
        break;
      case 1:
        resumeCancellableWith(delegate, result);
        break;
      case 2:
        var tmp3_resumeUndispatchedWith_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
        var tmp0_withCoroutineContext_0_1 = tmp3_resumeUndispatchedWith_0._get_context__9();
        var tmp1_withCoroutineContext_0_2 = tmp3_resumeUndispatchedWith_0._countOrElement;
        tmp3_resumeUndispatchedWith_0._continuation_0.resumeWith_8(result);
        break;
      default:var tmp4_error_0 = '' + 'Invalid mode ' + useMode;
        throw IllegalStateException_init_$Create$(toString_1(tmp4_error_0));
    }
  }
  function Symbol(symbol) {
    this._symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return this._symbol;
  };
  Symbol.$metadata$ = {
    simpleName: 'Symbol',
    kind: 'class',
    interfaces: []
  };
  function startCoroutineCancellable(_this_, receiver, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this_, receiver, completion));
      var tmp0_success_0_3 = Companion_getInstance_2();
      var tmp1_success_0_4 = Unit_getInstance();
      tmp = resumeCancellableWith(tmp_0, Unit_getInstance());
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var tmp0_failure_0 = Companion_getInstance_2();
        tmp_1 = completion.resumeWith_8(createFailure($p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this_, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this_);
      var tmp0_success_0_4 = Companion_getInstance_2();
      var tmp1_success_0_5 = Unit_getInstance();
      tmp = resumeCancellableWith(tmp_0, Unit_getInstance());
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var tmp0_failure_0_2 = Companion_getInstance_2();
        tmp_1 = fatalCompletion.resumeWith_8(createFailure($p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineUndispatched(_this_, receiver, completion) {
    var tmp$ret$0;
    l$ret$1: do {
      var actualCompletion_1 = completion;
      var tmp;
      try {
        var tmp0_withCoroutineContext_0_8 = completion._get_context__9();
        var tmp1_withCoroutineContext_0_9 = null;
        tmp = _this_(receiver, actualCompletion_1);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp0_failure_0_1_4 = Companion_getInstance_2();
          actualCompletion_1.resumeWith_8(createFailure($p));
          tmp$ret$0 = Unit_getInstance();
          break l$ret$1;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      var value_2 = tmp;
      if (!(value_2 === _get_COROUTINE_SUSPENDED_())) {
        var tmp0_resume_0_5 = (value_2 == null ? true : isObject(value_2)) ? value_2 : THROW_CCE();
        var tmp0_success_0_1_6 = Companion_getInstance_2();
        actualCompletion_1.resumeWith_8(tmp0_resume_0_5);
      }}
     while (false);
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {
    simpleName: 'SelectClause0',
    kind: 'interface',
    interfaces: []
  };
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = {
    simpleName: 'SelectClause1',
    kind: 'interface',
    interfaces: []
  };
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {
    simpleName: 'CompletionHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function invokeIt(_this_, cause) {
    var tmp0_subject = typeof _this_;
    if (tmp0_subject === 'function')
      _this_(cause);
    else {
      _this_.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {
    simpleName: 'CancelHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function toDebugString(_this_) {
    return toString_1(_this_);
  }
  function _get_DefaultDelay_() {
    var tmp = Dispatchers_getInstance()._Default;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function newCoroutineContext(_this_, context) {
    var combined = _this_._get_coroutineContext__3().plus_17(context);
    return (!(combined === Dispatchers_getInstance()._Default) ? combined.get_28(Key_getInstance()) == null : false) ? combined.plus_17(Dispatchers_getInstance()._Default) : combined;
  }
  function createDefaultDispatcher() {
    var tmp;
    if ((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.product == 'ReactNative' : false) {
      tmp = NodeDispatcher_getInstance();
    } else {
      if (isJsdom()) {
        tmp = NodeDispatcher_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        if (!(typeof window === 'undefined')) {
          var tmp0_asDynamic_0 = window;
          tmp_1 = tmp0_asDynamic_0 != null;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp1_asDynamic_0 = window;
          tmp_0 = !(typeof tmp1_asDynamic_0.addEventListener === 'undefined');
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp = asCoroutineDispatcher(window);
        } else {
          if (typeof process === 'undefined') {
            tmp = SetTimeoutDispatcher_getInstance();
          } else {
            {
              tmp = NodeDispatcher_getInstance();
            }
          }
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function _get_coroutineName_(_this_) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.error.apply($externalVarargReceiverTmp, [].concat([].slice.call([exception])));
    }.call(this));
  }
  var counter;
  var DEBUG;
  function _get_classSimpleName_(_this_) {
    var tmp0_elvis_lhs = getKClassFromExpression_0(_this_)._get_simpleName__4();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function _get_hexAddress_(_this_) {
    var result = _this_.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      _this_.__debug_counter = result;
    }return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this._Default = createDefaultDispatcher();
    this._Main = new JsMainDispatcher(this._Default);
    this._Unconfined = Unconfined_getInstance();
  }
  Dispatchers.$metadata$ = {
    simpleName: 'Dispatchers',
    kind: 'object',
    interfaces: []
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate) {
    MainCoroutineDispatcher.call(this);
    this._delegate_0 = delegate;
  }
  JsMainDispatcher.prototype._get_immediate__0 = function () {
    throw UnsupportedOperationException_init_$Create$_0('Immediate dispatching is not supported on JS');
  };
  JsMainDispatcher.prototype.dispatch_8 = function (context, block) {
    return this._delegate_0.dispatch_8(context, block);
  };
  JsMainDispatcher.prototype.isDispatchNeeded_8 = function (context) {
    return this._delegate_0.isDispatchNeeded_8(context);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_0();
    return tmp0_elvis_lhs == null ? this._delegate_0.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = {
    simpleName: 'JsMainDispatcher',
    kind: 'class',
    interfaces: []
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_8 = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {
    simpleName: 'UnconfinedEventLoop',
    kind: 'class',
    interfaces: []
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$_0('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException.call(this, message, cause);
    this._job_0 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return '' + CancellationException.prototype.toString.call(this) + '; job=' + this._job_0;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals(other._job_0, this._job_0);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this._job_0) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = {
    simpleName: 'JobCancellationException',
    kind: 'class',
    interfaces: []
  };
  function CancellationException(message, cause) {
    IllegalStateException_init_$Init$_0(message, cause, this);
    captureStack(this, CancellationException);
  }
  CancellationException.$metadata$ = {
    simpleName: 'CancellationException',
    kind: 'class',
    interfaces: []
  };
  function CancellationException_init_$Init$(message, $this) {
    CancellationException.call($this, message, null);
    return $this;
  }
  function CancellationException_init_$Create$(message) {
    var tmp = CancellationException_init_$Init$(message, Object.create(CancellationException.prototype));
    captureStack(tmp, CancellationException_init_$Create$);
    return tmp;
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing_1 = function () {
    process.nextTick(this._get_messageQueue__1()._processQueue);
  };
  NodeDispatcher.$metadata$ = {
    simpleName: 'NodeDispatcher',
    kind: 'object',
    interfaces: []
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing_1 = function () {
    setTimeout(this._get_messageQueue__1()._processQueue, 0);
    Unit_getInstance();
  };
  SetTimeoutDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutDispatcher',
    kind: 'object',
    interfaces: []
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this._messageQueue = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype._get_messageQueue__1 = function () {
    return this._messageQueue;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_8 = function (context, block) {
    this._messageQueue.enqueue_1(block);
  };
  SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_3 = function (timeMillis, continuation) {
    var handle = setTimeout(_no_name_provided_$factory_25(continuation, this), delayToInt(timeMillis));
    var tmp0__get_asHandler__0 = new ClearTimeout(handle);
    continuation.invokeOnCancellation_0(tmp0__get_asHandler__0);
  };
  SetTimeoutBasedDispatcher.$metadata$ = {
    simpleName: 'SetTimeoutBasedDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this._yieldEvery = 16;
    this._scheduled = false;
  }
  MessageQueue.prototype.enqueue_1 = function (element) {
    this.addLast_7(element);
    if (!this._scheduled) {
      this._scheduled = true;
      this.schedule_1();
    }};
  MessageQueue.prototype.process_1 = function () {
    try {
      var tmp0_repeat_0 = this._yieldEvery;
      var inductionVariable = 0;
      var last = tmp0_repeat_0 - 1 | 0;
      if (!(tmp0_repeat_0 === -2147483648) ? inductionVariable <= last : false)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs_5 = this.removeFirstOrNull_2();
          var tmp;
          if (tmp0_elvis_lhs_5 == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs_5;
          }
          var element_4 = tmp;
          element_4.run_3();
        }
         while (inductionVariable <= last);
    }finally {
      if (this._get_isEmpty__2()) {
        this._scheduled = false;
      } else {
        this.reschedule_1();
      }
    }
  };
  MessageQueue.$metadata$ = {
    simpleName: 'MessageQueue',
    kind: 'class',
    interfaces: []
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_4();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this._handle = handle;
  }
  ClearTimeout.prototype.dispose_9 = function () {
    clearTimeout(this._handle);
  };
  ClearTimeout.prototype.invoke_67 = function (cause) {
    this.dispose_9();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.invoke_67(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return '' + 'ClearTimeout[' + this._handle + ']';
  };
  ClearTimeout.$metadata$ = {
    simpleName: 'ClearTimeout',
    kind: 'class',
    interfaces: [DisposableHandle]
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this._window = window_0;
    this._queue = new WindowMessageQueue(this._window);
  }
  WindowDispatcher.prototype.dispatch_8 = function (context, block) {
    return this._queue.enqueue_1(block);
  };
  WindowDispatcher.prototype.scheduleResumeAfterDelay_3 = function (timeMillis, continuation) {
    (function () {
      var $externalVarargReceiverTmp = this._window;
      return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [].concat([_no_name_provided_$factory_26(continuation, this)], [delayToInt(timeMillis)], [].slice.call([])));
    }.call(this));
    Unit_getInstance();
  };
  WindowDispatcher.$metadata$ = {
    simpleName: 'WindowDispatcher',
    kind: 'class',
    interfaces: [Delay]
  };
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this._window_0 = window_0;
    this._messageName = 'dispatchCoroutine';
    this._window_0.addEventListener('message', _no_name_provided_$factory_27(this), true);
  }
  WindowMessageQueue.prototype.schedule_1 = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(_no_name_provided_$factory_28(this));
    Unit_getInstance();
  };
  WindowMessageQueue.prototype.reschedule_1 = function () {
    this._window_0.postMessage(this._messageName, '*', void 1);
  };
  WindowMessageQueue.$metadata$ = {
    simpleName: 'WindowMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_24($this) {
    var i = new _no_name_provided__27($this);
    return function () {
      i.invoke_60();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_25($continuation, $this) {
    var i = new _no_name_provided__28($continuation, $this);
    return function () {
      i.invoke_60();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_26($continuation, $this) {
    var i = new _no_name_provided__29($continuation, $this);
    return function () {
      i.invoke_60();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_27($this) {
    var i = new _no_name_provided__30($this);
    return function (p1) {
      i.invoke_61(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_28($this) {
    var i = new _no_name_provided__31($this);
    return function (p1) {
      i.invoke_63(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__27($this) {
    this._$this_6 = $this;
  }
  _no_name_provided__27.prototype.invoke_60 = function () {
    this._$this_6.process_1();
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ScheduledMessageQueue($outer) {
    this._$this_7 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp._processQueue = _no_name_provided_$factory_24(this);
  }
  ScheduledMessageQueue.prototype.schedule_1 = function () {
    this._$this_7.scheduleQueueProcessing_1();
  };
  ScheduledMessageQueue.prototype.reschedule_1 = function () {
    setTimeout(this._processQueue, 0);
    Unit_getInstance();
  };
  ScheduledMessageQueue.$metadata$ = {
    simpleName: 'ScheduledMessageQueue',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28($continuation, $this) {
    this._$continuation = $continuation;
    this._$this_8 = $this;
  }
  _no_name_provided__28.prototype.invoke_60 = function () {
    this._$continuation.resumeUndispatched_0(this._$this_8, Unit_getInstance());
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__29($continuation, $this) {
    this._$continuation_0 = $continuation;
    this._$this_9 = $this;
  }
  _no_name_provided__29.prototype.invoke_60 = function () {
    this._$continuation_0.resumeUndispatched_0(this._$this_9, Unit_getInstance());
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__30($this) {
    this._$this_10 = $this;
  }
  _no_name_provided__30.prototype.invoke_61 = function (event) {
    if (event.source == this._$this_10._window_0 ? event.data == this._$this_10._messageName : false) {
      event.stopPropagation();
      this._$this_10.process_1();
    }};
  _no_name_provided__30.prototype.invoke_68 = function (p1) {
    this.invoke_61((p1 == null ? true : p1) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__31($this) {
    this._$this_11 = $this;
  }
  _no_name_provided__31.prototype.invoke_63 = function (it) {
    this._$this_11.process_1();
  };
  _no_name_provided__31.prototype.invoke_68 = function (p1) {
    this.invoke_63(p1 instanceof Unit ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function promise(_this_, context, start, block) {
    return asPromise(async(_this_, context, start, block));
  }
  function promise$default(_this_, context, start, block, $mask0, $handler) {
    var context_0 = !(($mask0 & 1) === 0) ? EmptyCoroutineContext_getInstance() : context;
    var start_0 = !(($mask0 & 2) === 0) ? CoroutineStart_DEFAULT_getInstance() : start;
    return promise(_this_, context_0, start_0, block);
  }
  function asPromise(_this_) {
    var promise_0 = new Promise(_no_name_provided_$factory_29(_this_));
    promise_0.deferred = _this_;
    return promise_0;
  }
  function _no_name_provided__32($this) {
    this._$this_12 = $this;
  }
  _no_name_provided__32.prototype.invoke_65 = function (resolve, reject) {
    this._$this_12.invokeOnCompletion_6(_no_name_provided_$factory_30(this._$this_12, reject, resolve));
    Unit_getInstance();
  };
  _no_name_provided__32.prototype.invoke_66 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'function' : false) ? p1 : THROW_CCE();
    this.invoke_65(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_29($this) {
    var i = new _no_name_provided__32($this);
    return function (p1, p2) {
      i.invoke_65(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_30($this, $reject, $resolve) {
    var i = new _no_name_provided__33($this, $reject, $resolve);
    return function (p1) {
      i.invoke_67(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__33($this, $reject, $resolve) {
    this._$this_13 = $this;
    this._$reject = $reject;
    this._$resolve = $resolve;
  }
  _no_name_provided__33.prototype.invoke_67 = function (it) {
    var e = this._$this_13.getCompletionExceptionOrNull_2();
    if (!(e == null)) {
      this._$reject(e);
    } else {
      this._$resolve(this._$this_13.getCompleted_1());
    }
  };
  _no_name_provided__33.prototype.invoke_68 = function (p1) {
    this.invoke_67((p1 == null ? true : p1 instanceof Error) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Runnable() {
  }
  Runnable.$metadata$ = {
    simpleName: 'Runnable',
    kind: 'interface',
    interfaces: []
  };
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {
    simpleName: 'SchedulerTask',
    kind: 'class',
    interfaces: [Runnable]
  };
  function _get_taskContext_(_this_) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this_) {
    var tmp0_elvis_lhs = _this_.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_also_0 = new WindowDispatcher(_this_);
      _this_.coroutineDispatcher = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.$metadata$ = {
    simpleName: 'LinkedListHead',
    kind: 'class',
    interfaces: []
  };
  function LinkedListNode() {
    this.__next = this;
    this.__prev = this;
    this.__removed = false;
  }
  LinkedListNode.prototype._get__next__1 = function () {
    return this.__next;
  };
  LinkedListNode.prototype.addLast_13 = function (node) {
    var prev = this.__prev;
    node.__next = this;
    node.__prev = prev;
    prev.__next = node;
    this.__prev = node;
  };
  LinkedListNode.prototype.remove_7 = function () {
    if (this.__removed)
      return false;
    var prev = this.__prev;
    var next = this.__next;
    prev.__next = next;
    next.__prev = prev;
    this.__removed = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_6 = function (node) {
    if (!(this.__next === this))
      return false;
    this.addLast_13(node);
    return true;
  };
  LinkedListNode.$metadata$ = {
    simpleName: 'LinkedListNode',
    kind: 'class',
    interfaces: []
  };
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {
    simpleName: 'CoroutineStackFrame',
    kind: 'interface',
    interfaces: []
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this._value_3 = null;
  }
  CommonThreadLocal.prototype.get_29 = function () {
    var tmp = this._value_3;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_3 = function (value) {
    this._value_3 = value;
  };
  CommonThreadLocal.$metadata$ = {
    simpleName: 'CommonThreadLocal',
    kind: 'class',
    interfaces: []
  };
  function SomeSyncApi() {
  }
  SomeSyncApi.$metadata$ = {
    simpleName: 'SomeSyncApi',
    kind: 'interface',
    interfaces: []
  };
  function SomeSyncApiImpl() {
  }
  SomeSyncApiImpl.prototype.getLocalData_0 = function () {
    return true;
  };
  SomeSyncApiImpl.prototype.getLocalData = function () {
    return this.getLocalData_0();
  };
  SomeSyncApiImpl.$metadata$ = {
    simpleName: 'SomeSyncApiImpl',
    kind: 'class',
    interfaces: [SomeSyncApi]
  };
  function SomeAsyncApiImpl() {
  }
  SomeAsyncApiImpl.prototype.requestRemoteData_0 = function (msg, $cont) {
    var tmp = new $requestRemoteDataCOROUTINE$1(this, msg, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_3();
  };
  SomeAsyncApiImpl.$metadata$ = {
    simpleName: 'SomeAsyncApiImpl',
    kind: 'class',
    interfaces: []
  };
  function $requestRemoteDataCOROUTINE$1(_this_, msg, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this_ = _this_;
    this._msg = msg;
    this._exceptionState = 2;
  }
  $requestRemoteDataCOROUTINE$1.prototype.doResume_3 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._state_0 = 1;
            suspendResult = delay(new Long(10, 0), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            suspendResult;
            return '' + 'After 10ms delay (' + this._msg + ')';
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $requestRemoteDataCOROUTINE$1.$metadata$ = {
    simpleName: '$requestRemoteDataCOROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function DataHolder(msg, priority) {
    this._msg_0 = msg;
    this._priority = priority;
  }
  DataHolder.prototype._set_msg_ = function (_set___) {
    this._msg_0 = _set___;
  };
  DataHolder.prototype._get_msg_ = function () {
    return this._msg_0;
  };
  DataHolder.prototype._set_priority_ = function (_set___) {
    this._priority = _set___;
  };
  DataHolder.prototype._get_priority_ = function () {
    return this._priority;
  };
  DataHolder.prototype.component1 = function () {
    return this._msg_0;
  };
  DataHolder.prototype.component2 = function () {
    return this._priority;
  };
  DataHolder.prototype.copy = function (msg, priority) {
    return new DataHolder(msg, priority);
  };
  DataHolder.prototype.copy$default = function (msg, priority, $mask0, $handler) {
    var msg_0 = !(($mask0 & 1) === 0) ? this._msg_0 : msg;
    var priority_0 = !(($mask0 & 2) === 0) ? this._priority : priority;
    return this.copy(msg_0, priority_0);
  };
  DataHolder.prototype.toString = function () {
    return '' + 'DataHolder(msg=' + this._msg_0 + ', priority=' + this._priority + ')';
  };
  DataHolder.prototype.hashCode = function () {
    return imul(getStringHashCode(this._msg_0), 31) + this._priority.hashCode() | 0;
  };
  DataHolder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DataHolder))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DataHolder ? other : THROW_CCE();
    if (!(this._msg_0 === tmp0_other_with_cast._msg_0))
      return false;
    if (!this._priority.equals(tmp0_other_with_cast._priority))
      return false;
    return true;
  };
  DataHolder.$metadata$ = {
    simpleName: 'DataHolder',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataHolder.prototype, 'msg', {
    configurable: true,
    get: DataHolder.prototype._get_msg_,
    set: DataHolder.prototype._set_msg_
  });
  Object.defineProperty(DataHolder.prototype, 'priority', {
    configurable: true,
    get: DataHolder.prototype._get_priority_,
    set: DataHolder.prototype._set_priority_
  });
  function KmpStdTypesSample() {
  }
  KmpStdTypesSample.prototype.incFloat = function (f) {
    return f + 1.0;
  };
  KmpStdTypesSample.prototype.incInt = function (i) {
    return i + 1 | 0;
  };
  KmpStdTypesSample.prototype.incLong = function (l) {
    return l.plus_45(new Long(1, 0));
  };
  KmpStdTypesSample.prototype.newArray = function (length, defaultValue) {
    var tmp0 = 0;
    var tmp1 = length;
    var tmp2 = fillArrayVal(Array(tmp1), null);
    while (tmp0 < tmp1) {
      var tmp3 = tmp0;
      tmp2[tmp3] = defaultValue;
      tmp0 = tmp0 + 1 | 0;
    }
    return tmp2;
  };
  KmpStdTypesSample.prototype.newArray$default = function (length, defaultValue, $mask0, $handler) {
    var defaultValue_0 = !(($mask0 & 2) === 0) ? '' : defaultValue;
    return this.newArray(length, defaultValue_0);
  };
  KmpStdTypesSample.prototype.newList = function (length, defaultValue) {
    var list_1 = ArrayList_init_$Create$(length);
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (!(length === -2147483648) ? inductionVariable <= last : false)
      do {
        var index_3_3 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        list_1.add_8(defaultValue);
        Unit_getInstance();
      }
       while (inductionVariable <= last);
    return list_1;
  };
  KmpStdTypesSample.prototype.newList$default = function (length, defaultValue, $mask0, $handler) {
    var defaultValue_0 = !(($mask0 & 2) === 0) ? '' : defaultValue;
    return this.newList(length, defaultValue_0);
  };
  KmpStdTypesSample.prototype.modifyList = function (strgs) {
    return strgs.set_2(0, 'KMP');
  };
  KmpStdTypesSample.prototype.modifyArray = function (arr) {
    arr[0] = 'KMP';
  };
  KmpStdTypesSample.prototype.joinArr = function (arr) {
    if (arr.length === 0)
      throw UnsupportedOperationException_init_$Create$_0("Empty array can't be reduced.");
    else {
    }
    var accumulator_1 = arr[0];
    var inductionVariable = 1;
    var last = _get_lastIndex_(arr);
    if (inductionVariable <= last)
      do {
        var index_3 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0__anonymous__4 = accumulator_1;
        var tmp1__anonymous__4 = arr[index_3];
        accumulator_1 = '' + tmp0__anonymous__4 + ' [kmp] ' + tmp1__anonymous__4;
      }
       while (!(index_3 === last));
    return accumulator_1;
  };
  KmpStdTypesSample.$metadata$ = {
    simpleName: 'KmpStdTypesSample',
    kind: 'class',
    interfaces: []
  };
  InterfaceSample.prototype.defImpl_1 = function (name) {
    return '' + 'defImpl: (' + name + ')';
  };
  function InterfaceSample() {
  }
  InterfaceSample.$metadata$ = {
    simpleName: 'InterfaceSample',
    kind: 'interface',
    interfaces: []
  };
  function FirstImpl() {
  }
  FirstImpl.prototype.implThis_1 = function (name) {
    return 'FirstImpl: ' + this.defImpl_1(name);
  };
  FirstImpl.prototype.implThis = function (name) {
    return this.implThis_1(name);
  };
  FirstImpl.$metadata$ = {
    simpleName: 'FirstImpl',
    kind: 'class',
    interfaces: [InterfaceSample]
  };
  function SecondImpl() {
    FirstImpl.call(this);
  }
  SecondImpl.prototype.implThis_1 = function (name) {
    return 'SecondImpl: ' + FirstImpl.prototype.implThis_1.call(this, name);
  };
  SecondImpl.prototype.implThis = function (name) {
    return this.implThis_1(name);
  };
  SecondImpl.$metadata$ = {
    simpleName: 'SecondImpl',
    kind: 'class',
    interfaces: []
  };
  function newJsAdoptedFullApiImpl() {
    var delegateToThis = new SomeSyncApiImpl();
    var someAsyncApiImpl = new SomeAsyncApiImpl();
    return new JsAdoptedFullApiImpl(delegateToThis, someAsyncApiImpl);
  }
  function JsAdoptedFullApiImpl(delegateToThis, asyncDelegator) {
    this._asyncDelegator = asyncDelegator;
    this._$$delegate_0 = delegateToThis;
  }
  JsAdoptedFullApiImpl.prototype.getLocalData = function () {
    return this._$$delegate_0.getLocalData();
  };
  JsAdoptedFullApiImpl.prototype.requestRemoteData = function (msg) {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, _no_name_provided_$factory_31(this, msg, null), 3, null);
  };
  JsAdoptedFullApiImpl.$metadata$ = {
    simpleName: 'JsAdoptedFullApiImpl',
    kind: 'class',
    interfaces: [SomeSyncApi]
  };
  function _no_name_provided_$factory_31($this, $msg, resultContinuation) {
    var i = new _no_name_provided__34($this, $msg, resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_69(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__34($this, $msg, resultContinuation) {
    this._$this_14 = $this;
    this._$msg = $msg;
    CoroutineImpl_0.call(this, resultContinuation);
    this._exceptionState = 2;
  }
  _no_name_provided__34.prototype.invoke_69 = function (_this__0, $cont) {
    var tmp = this.create_3(_this__0, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_3();
  };
  _no_name_provided__34.prototype.doResume_3 = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._state_0 = 1;
            suspendResult = this._$this_14._asyncDelegator.requestRemoteData_0(this._$msg, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__34.prototype.create_3 = function (_this__0, completion) {
    var i = new _no_name_provided__34(this._$this_14, this._$msg, completion);
    i.__this__0 = _this__0;
    return i;
  };
  _no_name_provided__34.prototype.create_4 = function (value, completion) {
    return this.create_3((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: 1
  };
  AbstractCollection.prototype._get_size__15 = AbstractCollection.prototype._get_size__15;
  AbstractCollection.prototype.iterator_21 = AbstractCollection.prototype.iterator_21;
  AbstractMap.prototype._get_entries__2 = Map_0.prototype._get_entries__2;
  CombinedContext.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  AbstractCoroutineContextElement.prototype.get_28 = Element_0.prototype.get_28;
  AbstractCoroutineContextElement.prototype.fold_17 = Element_0.prototype.fold_17;
  AbstractCoroutineContextElement.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  AbstractCoroutineContextElement.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  CoroutineSingletons.prototype.equals = Enum.prototype.equals;
  CoroutineSingletons.prototype.hashCode = Enum.prototype.hashCode;
  CoroutineSingletons.prototype.toString = Enum.prototype.toString;
  AbstractMutableCollection.prototype._get_size__15 = AbstractCollection.prototype._get_size__15;
  AbstractMutableCollection.prototype.iterator_21 = AbstractCollection.prototype.iterator_21;
  AbstractMutableCollection.prototype.contains_9 = AbstractCollection.prototype.contains_9;
  AbstractMutableCollection.prototype.containsAll_7 = AbstractCollection.prototype.containsAll_7;
  AbstractMutableCollection.prototype.isEmpty_11 = AbstractCollection.prototype.isEmpty_11;
  AbstractMutableCollection.prototype.toString = AbstractCollection.prototype.toString;
  AbstractMutableCollection.prototype.toArray = AbstractCollection.prototype.toArray;
  AbstractMutableList.prototype.set_2 = AbstractMutableList.prototype.set_2;
  AbstractMutableList.prototype.toJSON = AbstractMutableCollection.prototype.toJSON;
  AbstractMutableList.prototype._get_size__15 = AbstractCollection.prototype._get_size__15;
  AbstractMutableList.prototype.containsAll_7 = AbstractCollection.prototype.containsAll_7;
  AbstractMutableList.prototype.isEmpty_11 = AbstractCollection.prototype.isEmpty_11;
  AbstractMutableList.prototype.toString = AbstractCollection.prototype.toString;
  AbstractMutableList.prototype.toArray = AbstractCollection.prototype.toArray;
  AbstractMutableList.prototype.get_39 = List.prototype.get_39;
  AbstractMutableMap.prototype.containsKey_2 = AbstractMap.prototype.containsKey_2;
  AbstractMutableMap.prototype.containsEntry_1 = AbstractMap.prototype.containsEntry_1;
  AbstractMutableMap.prototype.equals = AbstractMap.prototype.equals;
  AbstractMutableMap.prototype.get_14 = AbstractMap.prototype.get_14;
  AbstractMutableMap.prototype.hashCode = AbstractMap.prototype.hashCode;
  AbstractMutableMap.prototype._get_size__15 = AbstractMap.prototype._get_size__15;
  AbstractMutableMap.prototype.toString = AbstractMap.prototype.toString;
  AbstractMutableMap.prototype._get_entries__2 = MutableMap.prototype._get_entries__2;
  AbstractMutableSet.prototype.add_8 = AbstractMutableCollection.prototype.add_8;
  AbstractMutableSet.prototype.toJSON = AbstractMutableCollection.prototype.toJSON;
  AbstractMutableSet.prototype._get_size__15 = AbstractCollection.prototype._get_size__15;
  AbstractMutableSet.prototype.iterator_21 = AbstractCollection.prototype.iterator_21;
  AbstractMutableSet.prototype.contains_9 = AbstractCollection.prototype.contains_9;
  AbstractMutableSet.prototype.containsAll_7 = AbstractCollection.prototype.containsAll_7;
  AbstractMutableSet.prototype.isEmpty_11 = AbstractCollection.prototype.isEmpty_11;
  AbstractMutableSet.prototype.toString = AbstractCollection.prototype.toString;
  AbstractMutableSet.prototype.toArray = AbstractCollection.prototype.toArray;
  _no_name_provided__4.prototype.toArray = AbstractCollection.prototype.toArray;
  _no_name_provided__4.prototype.toJSON = AbstractMutableCollection.prototype.toJSON;
  _no_name_provided__4.prototype.containsAll_7 = AbstractCollection.prototype.containsAll_7;
  _no_name_provided__4.prototype.equals = AbstractMutableSet.prototype.equals;
  _no_name_provided__4.prototype.hashCode = AbstractMutableSet.prototype.hashCode;
  _no_name_provided__4.prototype.isEmpty_11 = AbstractCollection.prototype.isEmpty_11;
  _no_name_provided__4.prototype.toString = AbstractCollection.prototype.toString;
  ArrayList.prototype._set_modCount__0 = AbstractMutableList.prototype._set_modCount__0;
  ArrayList.prototype._get_modCount__0 = AbstractMutableList.prototype._get_modCount__0;
  ArrayList.prototype.iterator_21 = AbstractMutableList.prototype.iterator_21;
  ArrayList.prototype.contains_9 = AbstractMutableList.prototype.contains_9;
  ArrayList.prototype.equals = AbstractMutableList.prototype.equals;
  ArrayList.prototype.hashCode = AbstractMutableList.prototype.hashCode;
  ArrayList.prototype.toJSON = AbstractMutableCollection.prototype.toJSON;
  ArrayList.prototype.containsAll_7 = AbstractCollection.prototype.containsAll_7;
  ArrayList.prototype.isEmpty_11 = AbstractCollection.prototype.isEmpty_11;
  HashMap.prototype._get_keys__0 = AbstractMutableMap.prototype._get_keys__0;
  HashMap.prototype.containsEntry_1 = AbstractMap.prototype.containsEntry_1;
  HashMap.prototype.equals = AbstractMap.prototype.equals;
  HashMap.prototype.hashCode = AbstractMap.prototype.hashCode;
  HashMap.prototype.isEmpty_11 = AbstractMap.prototype.isEmpty_11;
  HashMap.prototype.toString = AbstractMap.prototype.toString;
  EntrySet.prototype.toArray = AbstractCollection.prototype.toArray;
  EntrySet.prototype.toJSON = AbstractMutableCollection.prototype.toJSON;
  EntrySet.prototype.containsAll_7 = AbstractCollection.prototype.containsAll_7;
  EntrySet.prototype.equals = AbstractMutableSet.prototype.equals;
  EntrySet.prototype.hashCode = AbstractMutableSet.prototype.hashCode;
  EntrySet.prototype.isEmpty_11 = AbstractCollection.prototype.isEmpty_11;
  EntrySet.prototype.toString = AbstractCollection.prototype.toString;
  HashSet.prototype.equals = AbstractMutableSet.prototype.equals;
  HashSet.prototype.hashCode = AbstractMutableSet.prototype.hashCode;
  HashSet.prototype.toJSON = AbstractMutableCollection.prototype.toJSON;
  HashSet.prototype.containsAll_7 = AbstractCollection.prototype.containsAll_7;
  HashSet.prototype.toString = AbstractCollection.prototype.toString;
  HashSet.prototype.toArray = AbstractCollection.prototype.toArray;
  InternalHashCodeMap.prototype.createJsMap_0 = InternalMap.prototype.createJsMap_0;
  KClassImpl.prototype._get_simpleName__4 = KClass.prototype._get_simpleName__4;
  PrimitiveKClassImpl.prototype._get_jClass__2 = KClassImpl.prototype._get_jClass__2;
  PrimitiveKClassImpl.prototype.hashCode = KClassImpl.prototype.hashCode;
  PrimitiveKClassImpl.prototype.toString = KClassImpl.prototype.toString;
  NothingKClassImpl.prototype.toString = KClassImpl.prototype.toString;
  SimpleKClassImpl.prototype._get_jClass__2 = KClassImpl.prototype._get_jClass__2;
  SimpleKClassImpl.prototype.equals = KClassImpl.prototype.equals;
  SimpleKClassImpl.prototype.hashCode = KClassImpl.prototype.hashCode;
  SimpleKClassImpl.prototype.toString = KClassImpl.prototype.toString;
  CoroutineImpl_0.prototype.doResume_3 = CoroutineImpl_0.prototype.doResume_3;
  _no_name_provided__1_0.prototype._set_exception__1 = CoroutineImpl_0.prototype._set_exception__1;
  _no_name_provided__1_0.prototype._get_exception__1 = CoroutineImpl_0.prototype._get_exception__1;
  _no_name_provided__1_0.prototype._set_exceptionState__1 = CoroutineImpl_0.prototype._set_exceptionState__1;
  _no_name_provided__1_0.prototype._get_exceptionState__1 = CoroutineImpl_0.prototype._get_exceptionState__1;
  _no_name_provided__1_0.prototype._set_finallyPath__1 = CoroutineImpl_0.prototype._set_finallyPath__1;
  _no_name_provided__1_0.prototype._get_finallyPath__1 = CoroutineImpl_0.prototype._get_finallyPath__1;
  _no_name_provided__1_0.prototype._set_result__1 = CoroutineImpl_0.prototype._set_result__1;
  _no_name_provided__1_0.prototype._get_result__1 = CoroutineImpl_0.prototype._get_result__1;
  _no_name_provided__1_0.prototype._set_state__1 = CoroutineImpl_0.prototype._set_state__1;
  _no_name_provided__1_0.prototype._get_state__6 = CoroutineImpl_0.prototype._get_state__6;
  _no_name_provided__1_0.prototype.intercepted_1 = CoroutineImpl_0.prototype.intercepted_1;
  _no_name_provided__1_0.prototype.create_5 = CoroutineImpl_0.prototype.create_5;
  _no_name_provided__1_0.prototype.create_4 = CoroutineImpl_0.prototype.create_4;
  _no_name_provided__1_0.prototype.resumeWith_10 = CoroutineImpl_0.prototype.resumeWith_10;
  _no_name_provided__1_0.prototype._get_context__9 = CoroutineImpl_0.prototype._get_context__9;
  JobSupport.prototype.invokeOnCompletion$default_3 = Job.prototype.invokeOnCompletion$default_3;
  JobSupport.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  JobSupport.prototype.get_28 = Element_0.prototype.get_28;
  JobSupport.prototype.fold_17 = Element_0.prototype.fold_17;
  JobSupport.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  AbstractCoroutine.prototype._get_key__18 = JobSupport.prototype._get_key__18;
  AbstractCoroutine.prototype._set_parentHandle__2 = JobSupport.prototype._set_parentHandle__2;
  AbstractCoroutine.prototype._get_parentHandle__2 = JobSupport.prototype._get_parentHandle__2;
  AbstractCoroutine.prototype.initParentJobInternal_2 = JobSupport.prototype.initParentJobInternal_2;
  AbstractCoroutine.prototype._get_state__6 = JobSupport.prototype._get_state__6;
  AbstractCoroutine.prototype._get_isCompleted__3 = JobSupport.prototype._get_isCompleted__3;
  AbstractCoroutine.prototype.start_7 = JobSupport.prototype.start_7;
  AbstractCoroutine.prototype.getCancellationException_3 = JobSupport.prototype.getCancellationException_3;
  AbstractCoroutine.prototype.toCancellationException_2 = JobSupport.prototype.toCancellationException_2;
  AbstractCoroutine.prototype.toCancellationException$default_2 = JobSupport.prototype.toCancellationException$default_2;
  AbstractCoroutine.prototype.invokeOnCompletion_7 = JobSupport.prototype.invokeOnCompletion_7;
  AbstractCoroutine.prototype.invokeOnCompletion$default_3 = Job.prototype.invokeOnCompletion$default_3;
  AbstractCoroutine.prototype.removeNode_2 = JobSupport.prototype.removeNode_2;
  AbstractCoroutine.prototype._get_onCancelComplete__2 = JobSupport.prototype._get_onCancelComplete__2;
  AbstractCoroutine.prototype.parentCancelled_4 = JobSupport.prototype.parentCancelled_4;
  AbstractCoroutine.prototype.childCancelled_5 = JobSupport.prototype.childCancelled_5;
  AbstractCoroutine.prototype.cancelImpl_2 = JobSupport.prototype.cancelImpl_2;
  AbstractCoroutine.prototype.getChildJobCancellationCause_3 = JobSupport.prototype.getChildJobCancellationCause_3;
  AbstractCoroutine.prototype.makeCompletingOnce_2 = JobSupport.prototype.makeCompletingOnce_2;
  AbstractCoroutine.prototype.attachChild_3 = JobSupport.prototype.attachChild_3;
  AbstractCoroutine.prototype.onCancelling_2 = JobSupport.prototype.onCancelling_2;
  AbstractCoroutine.prototype._get_isScopedCoroutine__2 = JobSupport.prototype._get_isScopedCoroutine__2;
  AbstractCoroutine.prototype._get_handlesException__2 = JobSupport.prototype._get_handlesException__2;
  AbstractCoroutine.prototype.handleJobException_2 = JobSupport.prototype.handleJobException_2;
  AbstractCoroutine.prototype.afterCompletion_2 = JobSupport.prototype.afterCompletion_2;
  AbstractCoroutine.prototype.toString = JobSupport.prototype.toString;
  AbstractCoroutine.prototype.toDebugString_2 = JobSupport.prototype.toDebugString_2;
  AbstractCoroutine.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  AbstractCoroutine.prototype.get_28 = Element_0.prototype.get_28;
  AbstractCoroutine.prototype.fold_17 = Element_0.prototype.fold_17;
  AbstractCoroutine.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  DeferredCoroutine.prototype.onCompletionInternal_2 = AbstractCoroutine.prototype.onCompletionInternal_2;
  DeferredCoroutine.prototype._get_context__9 = AbstractCoroutine.prototype._get_context__9;
  DeferredCoroutine.prototype.attachChild_3 = JobSupport.prototype.attachChild_3;
  DeferredCoroutine.prototype.invokeOnCompletion_6 = JobSupport.prototype.invokeOnCompletion_6;
  DeferredCoroutine.prototype.toDebugString_2 = JobSupport.prototype.toDebugString_2;
  DeferredCoroutine.prototype.cancelImpl_2 = JobSupport.prototype.cancelImpl_2;
  DeferredCoroutine.prototype.getCompletedInternal_1 = JobSupport.prototype.getCompletedInternal_1;
  DeferredCoroutine.prototype.handleOnCompletionException_2 = AbstractCoroutine.prototype.handleOnCompletionException_2;
  DeferredCoroutine.prototype.initParentJob_1 = AbstractCoroutine.prototype.initParentJob_1;
  DeferredCoroutine.prototype.initParentJobInternal_2 = JobSupport.prototype.initParentJobInternal_2;
  DeferredCoroutine.prototype.makeCompletingOnce_2 = JobSupport.prototype.makeCompletingOnce_2;
  DeferredCoroutine.prototype.onStartInternal_2 = AbstractCoroutine.prototype.onStartInternal_2;
  DeferredCoroutine.prototype.removeNode_2 = JobSupport.prototype.removeNode_2;
  DeferredCoroutine.prototype._get_state__6 = JobSupport.prototype._get_state__6;
  DeferredCoroutine.prototype._set_parentHandle__2 = JobSupport.prototype._set_parentHandle__2;
  DeferredCoroutine.prototype._get_parentHandle__2 = JobSupport.prototype._get_parentHandle__2;
  DeferredCoroutine.prototype.nameString_3 = AbstractCoroutine.prototype.nameString_3;
  DeferredCoroutine.prototype._get_handlesException__2 = JobSupport.prototype._get_handlesException__2;
  DeferredCoroutine.prototype._get_onCancelComplete__2 = JobSupport.prototype._get_onCancelComplete__2;
  DeferredCoroutine.prototype.toCancellationException_2 = JobSupport.prototype.toCancellationException_2;
  DeferredCoroutine.prototype.toCancellationException$default_2 = JobSupport.prototype.toCancellationException$default_2;
  DeferredCoroutine.prototype.afterCompletion_2 = JobSupport.prototype.afterCompletion_2;
  DeferredCoroutine.prototype.afterResume_1 = AbstractCoroutine.prototype.afterResume_1;
  DeferredCoroutine.prototype.cancellationExceptionMessage_2 = AbstractCoroutine.prototype.cancellationExceptionMessage_2;
  DeferredCoroutine.prototype.handleJobException_2 = JobSupport.prototype.handleJobException_2;
  DeferredCoroutine.prototype.onCancelled_1 = AbstractCoroutine.prototype.onCancelled_1;
  DeferredCoroutine.prototype.onCancelling_2 = JobSupport.prototype.onCancelling_2;
  DeferredCoroutine.prototype.onCompleted_1 = AbstractCoroutine.prototype.onCompleted_1;
  DeferredCoroutine.prototype.onStart_1 = AbstractCoroutine.prototype.onStart_1;
  DeferredCoroutine.prototype._get_isScopedCoroutine__2 = JobSupport.prototype._get_isScopedCoroutine__2;
  DeferredCoroutine.prototype.start_4 = AbstractCoroutine.prototype.start_4;
  DeferredCoroutine.prototype.parentCancelled_4 = JobSupport.prototype.parentCancelled_4;
  DeferredCoroutine.prototype.resumeWith_8 = AbstractCoroutine.prototype.resumeWith_8;
  DeferredCoroutine.prototype.getCancellationException_3 = JobSupport.prototype.getCancellationException_3;
  DeferredCoroutine.prototype.getCompletionExceptionOrNull_2 = JobSupport.prototype.getCompletionExceptionOrNull_2;
  DeferredCoroutine.prototype.invokeOnCompletion_7 = JobSupport.prototype.invokeOnCompletion_7;
  DeferredCoroutine.prototype.invokeOnCompletion$default_3 = Job.prototype.invokeOnCompletion$default_3;
  DeferredCoroutine.prototype.start_7 = JobSupport.prototype.start_7;
  DeferredCoroutine.prototype._get_isCompleted__3 = JobSupport.prototype._get_isCompleted__3;
  DeferredCoroutine.prototype._get_key__18 = JobSupport.prototype._get_key__18;
  DeferredCoroutine.prototype.childCancelled_5 = JobSupport.prototype.childCancelled_5;
  DeferredCoroutine.prototype.getChildJobCancellationCause_3 = JobSupport.prototype.getChildJobCancellationCause_3;
  DeferredCoroutine.prototype._get_coroutineContext__3 = AbstractCoroutine.prototype._get_coroutineContext__3;
  DeferredCoroutine.prototype.get_28 = Element_0.prototype.get_28;
  DeferredCoroutine.prototype.fold_17 = Element_0.prototype.fold_17;
  DeferredCoroutine.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  DeferredCoroutine.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  DeferredCoroutine.prototype._get_isActive__15 = AbstractCoroutine.prototype._get_isActive__15;
  DeferredCoroutine.prototype.toString = JobSupport.prototype.toString;
  LazyDeferredCoroutine.prototype.onCompletionInternal_2 = AbstractCoroutine.prototype.onCompletionInternal_2;
  LazyDeferredCoroutine.prototype.attachChild_3 = JobSupport.prototype.attachChild_3;
  LazyDeferredCoroutine.prototype.invokeOnCompletion_6 = JobSupport.prototype.invokeOnCompletion_6;
  LazyDeferredCoroutine.prototype._get_context__9 = AbstractCoroutine.prototype._get_context__9;
  LazyDeferredCoroutine.prototype.toDebugString_2 = JobSupport.prototype.toDebugString_2;
  LazyDeferredCoroutine.prototype.cancelImpl_2 = JobSupport.prototype.cancelImpl_2;
  LazyDeferredCoroutine.prototype.getCompletedInternal_1 = JobSupport.prototype.getCompletedInternal_1;
  LazyDeferredCoroutine.prototype.handleOnCompletionException_2 = AbstractCoroutine.prototype.handleOnCompletionException_2;
  LazyDeferredCoroutine.prototype.initParentJob_1 = AbstractCoroutine.prototype.initParentJob_1;
  LazyDeferredCoroutine.prototype.initParentJobInternal_2 = JobSupport.prototype.initParentJobInternal_2;
  LazyDeferredCoroutine.prototype.makeCompletingOnce_2 = JobSupport.prototype.makeCompletingOnce_2;
  LazyDeferredCoroutine.prototype.onStartInternal_2 = AbstractCoroutine.prototype.onStartInternal_2;
  LazyDeferredCoroutine.prototype.removeNode_2 = JobSupport.prototype.removeNode_2;
  LazyDeferredCoroutine.prototype._get_state__6 = JobSupport.prototype._get_state__6;
  LazyDeferredCoroutine.prototype._set_parentHandle__2 = JobSupport.prototype._set_parentHandle__2;
  LazyDeferredCoroutine.prototype._get_parentHandle__2 = JobSupport.prototype._get_parentHandle__2;
  LazyDeferredCoroutine.prototype.nameString_3 = AbstractCoroutine.prototype.nameString_3;
  LazyDeferredCoroutine.prototype._get_handlesException__2 = JobSupport.prototype._get_handlesException__2;
  LazyDeferredCoroutine.prototype._get_onCancelComplete__2 = JobSupport.prototype._get_onCancelComplete__2;
  LazyDeferredCoroutine.prototype.toCancellationException_2 = JobSupport.prototype.toCancellationException_2;
  LazyDeferredCoroutine.prototype.toCancellationException$default_2 = JobSupport.prototype.toCancellationException$default_2;
  LazyDeferredCoroutine.prototype.afterCompletion_2 = JobSupport.prototype.afterCompletion_2;
  LazyDeferredCoroutine.prototype.afterResume_1 = AbstractCoroutine.prototype.afterResume_1;
  LazyDeferredCoroutine.prototype.cancellationExceptionMessage_2 = AbstractCoroutine.prototype.cancellationExceptionMessage_2;
  LazyDeferredCoroutine.prototype.handleJobException_2 = JobSupport.prototype.handleJobException_2;
  LazyDeferredCoroutine.prototype.onCancelled_1 = AbstractCoroutine.prototype.onCancelled_1;
  LazyDeferredCoroutine.prototype.onCancelling_2 = JobSupport.prototype.onCancelling_2;
  LazyDeferredCoroutine.prototype.onCompleted_1 = AbstractCoroutine.prototype.onCompleted_1;
  LazyDeferredCoroutine.prototype._get_isScopedCoroutine__2 = JobSupport.prototype._get_isScopedCoroutine__2;
  LazyDeferredCoroutine.prototype.start_4 = AbstractCoroutine.prototype.start_4;
  LazyDeferredCoroutine.prototype.getCancellationException_3 = JobSupport.prototype.getCancellationException_3;
  LazyDeferredCoroutine.prototype.getCompletionExceptionOrNull_2 = JobSupport.prototype.getCompletionExceptionOrNull_2;
  LazyDeferredCoroutine.prototype.invokeOnCompletion_7 = JobSupport.prototype.invokeOnCompletion_7;
  LazyDeferredCoroutine.prototype.invokeOnCompletion$default_3 = Job.prototype.invokeOnCompletion$default_3;
  LazyDeferredCoroutine.prototype.parentCancelled_4 = JobSupport.prototype.parentCancelled_4;
  LazyDeferredCoroutine.prototype.resumeWith_8 = AbstractCoroutine.prototype.resumeWith_8;
  LazyDeferredCoroutine.prototype.start_7 = JobSupport.prototype.start_7;
  LazyDeferredCoroutine.prototype._get_isCompleted__3 = JobSupport.prototype._get_isCompleted__3;
  LazyDeferredCoroutine.prototype._get_key__18 = JobSupport.prototype._get_key__18;
  LazyDeferredCoroutine.prototype.get_28 = Element_0.prototype.get_28;
  LazyDeferredCoroutine.prototype.fold_17 = Element_0.prototype.fold_17;
  LazyDeferredCoroutine.prototype.childCancelled_5 = JobSupport.prototype.childCancelled_5;
  LazyDeferredCoroutine.prototype.getChildJobCancellationCause_3 = JobSupport.prototype.getChildJobCancellationCause_3;
  LazyDeferredCoroutine.prototype.getCompleted_1 = DeferredCoroutine.prototype.getCompleted_1;
  LazyDeferredCoroutine.prototype.minusKey_18 = Element_0.prototype.minusKey_18;
  LazyDeferredCoroutine.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  LazyDeferredCoroutine.prototype.toString = JobSupport.prototype.toString;
  LazyDeferredCoroutine.prototype._get_coroutineContext__3 = AbstractCoroutine.prototype._get_coroutineContext__3;
  LazyDeferredCoroutine.prototype._get_isActive__15 = AbstractCoroutine.prototype._get_isActive__15;
  SchedulerTask.prototype.run_3 = Runnable.prototype.run_3;
  DispatchedTask.prototype._get_delegate__1 = DispatchedTask.prototype._get_delegate__1;
  DispatchedTask.prototype.takeState_1 = DispatchedTask.prototype.takeState_1;
  CancellableContinuationImpl.prototype._get_resumeMode__0 = DispatchedTask.prototype._get_resumeMode__0;
  CancellableContinuationImpl.prototype.getExceptionalResult_1 = DispatchedTask.prototype.getExceptionalResult_1;
  CancellableContinuationImpl.prototype.run_3 = DispatchedTask.prototype.run_3;
  CancellableContinuationImpl.prototype.handleFatalException_1 = DispatchedTask.prototype.handleFatalException_1;
  CancelHandlerBase.prototype.invoke = CancelHandlerBase.prototype.invoke;
  CancelHandler.prototype.invoke = CancelHandlerBase.prototype.invoke;
  CancelledContinuation.prototype._get_handled__0 = CompletedExceptionally.prototype._get_handled__0;
  CancelledContinuation.prototype.makeHandled_0 = CompletedExceptionally.prototype.makeHandled_0;
  CancelledContinuation.prototype.toString = CompletedExceptionally.prototype.toString;
  CoroutineDispatcher.prototype.dispatch_8 = CoroutineDispatcher.prototype.dispatch_8;
  CoroutineDispatcher.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  CoroutineDispatcher.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  CoroutineDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  CoroutineDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  CoroutineDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  CoroutineStart.prototype.equals = Enum.prototype.equals;
  CoroutineStart.prototype.hashCode = Enum.prototype.hashCode;
  CoroutineStart.prototype.toString = Enum.prototype.toString;
  EventLoop.prototype.isDispatchNeeded_8 = CoroutineDispatcher.prototype.isDispatchNeeded_8;
  EventLoop.prototype.dispatch_8 = CoroutineDispatcher.prototype.dispatch_8;
  EventLoop.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  EventLoop.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  EventLoop.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  EventLoop.prototype.toString = CoroutineDispatcher.prototype.toString;
  EventLoop.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  EventLoop.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  EventLoop.prototype.fold_17 = Element_0.prototype.fold_17;
  EventLoop.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  LinkedListHead.prototype._get__next__1 = LinkedListNode.prototype._get__next__1;
  LinkedListHead.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  NodeList_0.prototype._get__next__1 = LinkedListNode.prototype._get__next__1;
  NodeList_0.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  CompletionHandlerBase.prototype.invoke = CompletionHandlerBase.prototype.invoke;
  CompletionHandlerBase.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  JobNode.prototype.invoke = CompletionHandlerBase.prototype.invoke;
  JobNode.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  JobNode.prototype.remove_7 = LinkedListNode.prototype.remove_7;
  JobNode.prototype.addOneIfEmpty_6 = LinkedListNode.prototype.addOneIfEmpty_6;
  JobCancellingNode.prototype._get_isActive__15 = JobNode.prototype._get_isActive__15;
  JobCancellingNode.prototype._get_list__10 = JobNode.prototype._get_list__10;
  JobCancellingNode.prototype.dispose_9 = JobNode.prototype.dispose_9;
  JobCancellingNode.prototype.invoke = CompletionHandlerBase.prototype.invoke;
  JobCancellingNode.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  JobCancellingNode.prototype.remove_7 = LinkedListNode.prototype.remove_7;
  JobCancellingNode.prototype.addOneIfEmpty_6 = LinkedListNode.prototype.addOneIfEmpty_6;
  ChildHandleNode.prototype._get_job__1 = JobNode.prototype._get_job__1;
  ChildHandleNode.prototype._get_isActive__15 = JobNode.prototype._get_isActive__15;
  ChildHandleNode.prototype._get_list__10 = JobNode.prototype._get_list__10;
  ChildHandleNode.prototype.dispose_9 = JobNode.prototype.dispose_9;
  ChildHandleNode.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  ChildHandleNode.prototype.remove_7 = LinkedListNode.prototype.remove_7;
  ChildHandleNode.prototype.addOneIfEmpty_6 = LinkedListNode.prototype.addOneIfEmpty_6;
  InvokeOnCancelling.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  InvokeOnCancelling.prototype.addOneIfEmpty_6 = LinkedListNode.prototype.addOneIfEmpty_6;
  InvokeOnCancelling.prototype.dispose_9 = JobNode.prototype.dispose_9;
  InvokeOnCancelling.prototype.remove_7 = LinkedListNode.prototype.remove_7;
  InvokeOnCancelling.prototype._get_isActive__15 = JobNode.prototype._get_isActive__15;
  InvokeOnCancelling.prototype._get_list__10 = JobNode.prototype._get_list__10;
  InvokeOnCompletion.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  InvokeOnCompletion.prototype.addOneIfEmpty_6 = LinkedListNode.prototype.addOneIfEmpty_6;
  InvokeOnCompletion.prototype.dispose_9 = JobNode.prototype.dispose_9;
  InvokeOnCompletion.prototype.remove_7 = LinkedListNode.prototype.remove_7;
  InvokeOnCompletion.prototype._get_isActive__15 = JobNode.prototype._get_isActive__15;
  InvokeOnCompletion.prototype._get_list__10 = JobNode.prototype._get_list__10;
  ChildContinuation.prototype._get_job__1 = JobNode.prototype._get_job__1;
  ChildContinuation.prototype._get_isActive__15 = JobNode.prototype._get_isActive__15;
  ChildContinuation.prototype._get_list__10 = JobNode.prototype._get_list__10;
  ChildContinuation.prototype.dispose_9 = JobNode.prototype.dispose_9;
  ChildContinuation.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  ChildContinuation.prototype.remove_7 = LinkedListNode.prototype.remove_7;
  ChildContinuation.prototype.addOneIfEmpty_6 = LinkedListNode.prototype.addOneIfEmpty_6;
  ChildCompletion.prototype.addLast_13 = LinkedListNode.prototype.addLast_13;
  ChildCompletion.prototype.addOneIfEmpty_6 = LinkedListNode.prototype.addOneIfEmpty_6;
  ChildCompletion.prototype.dispose_9 = JobNode.prototype.dispose_9;
  ChildCompletion.prototype.remove_7 = LinkedListNode.prototype.remove_7;
  ChildCompletion.prototype._get_isActive__15 = JobNode.prototype._get_isActive__15;
  ChildCompletion.prototype._get_list__10 = JobNode.prototype._get_list__10;
  MainCoroutineDispatcher.prototype._get_immediate__0 = MainCoroutineDispatcher.prototype._get_immediate__0;
  MainCoroutineDispatcher.prototype.isDispatchNeeded_8 = CoroutineDispatcher.prototype.isDispatchNeeded_8;
  MainCoroutineDispatcher.prototype.dispatch_8 = CoroutineDispatcher.prototype.dispatch_8;
  MainCoroutineDispatcher.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  MainCoroutineDispatcher.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  MainCoroutineDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  MainCoroutineDispatcher.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  MainCoroutineDispatcher.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  MainCoroutineDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  MainCoroutineDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  Unconfined.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  Unconfined.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  Unconfined.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  Unconfined.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  Unconfined.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  Unconfined.prototype.fold_17 = Element_0.prototype.fold_17;
  Unconfined.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  OpDescriptor.prototype.perform = OpDescriptor.prototype.perform;
  DispatchedContinuation.prototype._set_resumeMode__0 = DispatchedTask.prototype._set_resumeMode__0;
  DispatchedContinuation.prototype.cancelResult_1 = DispatchedTask.prototype.cancelResult_1;
  DispatchedContinuation.prototype.getSuccessfulResult_1 = DispatchedTask.prototype.getSuccessfulResult_1;
  DispatchedContinuation.prototype.getExceptionalResult_1 = DispatchedTask.prototype.getExceptionalResult_1;
  DispatchedContinuation.prototype.run_3 = DispatchedTask.prototype.run_3;
  DispatchedContinuation.prototype.handleFatalException_1 = DispatchedTask.prototype.handleFatalException_1;
  JsMainDispatcher.prototype.toStringInternalImpl_0 = MainCoroutineDispatcher.prototype.toStringInternalImpl_0;
  JsMainDispatcher.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  JsMainDispatcher.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  JsMainDispatcher.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  JsMainDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  JsMainDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  JsMainDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  JsMainDispatcher.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  UnconfinedEventLoop.prototype.processUnconfinedEvent_0 = EventLoop.prototype.processUnconfinedEvent_0;
  UnconfinedEventLoop.prototype.dispatchUnconfined_0 = EventLoop.prototype.dispatchUnconfined_0;
  UnconfinedEventLoop.prototype._get_isUnconfinedLoopActive__0 = EventLoop.prototype._get_isUnconfinedLoopActive__0;
  UnconfinedEventLoop.prototype._get_isUnconfinedQueueEmpty__0 = EventLoop.prototype._get_isUnconfinedQueueEmpty__0;
  UnconfinedEventLoop.prototype.incrementUseCount_0 = EventLoop.prototype.incrementUseCount_0;
  UnconfinedEventLoop.prototype.decrementUseCount_0 = EventLoop.prototype.decrementUseCount_0;
  UnconfinedEventLoop.prototype.shutdown_0 = EventLoop.prototype.shutdown_0;
  UnconfinedEventLoop.prototype.isDispatchNeeded_8 = CoroutineDispatcher.prototype.isDispatchNeeded_8;
  UnconfinedEventLoop.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  UnconfinedEventLoop.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  UnconfinedEventLoop.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  UnconfinedEventLoop.prototype.toString = CoroutineDispatcher.prototype.toString;
  UnconfinedEventLoop.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  UnconfinedEventLoop.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  UnconfinedEventLoop.prototype.fold_17 = Element_0.prototype.fold_17;
  UnconfinedEventLoop.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  SetTimeoutBasedDispatcher.prototype.scheduleQueueProcessing_1 = SetTimeoutBasedDispatcher.prototype.scheduleQueueProcessing_1;
  SetTimeoutBasedDispatcher.prototype.isDispatchNeeded_8 = CoroutineDispatcher.prototype.isDispatchNeeded_8;
  SetTimeoutBasedDispatcher.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  SetTimeoutBasedDispatcher.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  SetTimeoutBasedDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  SetTimeoutBasedDispatcher.prototype.toString = CoroutineDispatcher.prototype.toString;
  SetTimeoutBasedDispatcher.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  SetTimeoutBasedDispatcher.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  SetTimeoutBasedDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  SetTimeoutBasedDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  NodeDispatcher.prototype._get_messageQueue__1 = SetTimeoutBasedDispatcher.prototype._get_messageQueue__1;
  NodeDispatcher.prototype.dispatch_8 = SetTimeoutBasedDispatcher.prototype.dispatch_8;
  NodeDispatcher.prototype.scheduleResumeAfterDelay_3 = SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_3;
  NodeDispatcher.prototype.isDispatchNeeded_8 = CoroutineDispatcher.prototype.isDispatchNeeded_8;
  NodeDispatcher.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  NodeDispatcher.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  NodeDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  NodeDispatcher.prototype.toString = CoroutineDispatcher.prototype.toString;
  NodeDispatcher.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  NodeDispatcher.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  NodeDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  NodeDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  SetTimeoutDispatcher.prototype._get_messageQueue__1 = SetTimeoutBasedDispatcher.prototype._get_messageQueue__1;
  SetTimeoutDispatcher.prototype.dispatch_8 = SetTimeoutBasedDispatcher.prototype.dispatch_8;
  SetTimeoutDispatcher.prototype.scheduleResumeAfterDelay_3 = SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_3;
  SetTimeoutDispatcher.prototype.isDispatchNeeded_8 = CoroutineDispatcher.prototype.isDispatchNeeded_8;
  SetTimeoutDispatcher.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  SetTimeoutDispatcher.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  SetTimeoutDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  SetTimeoutDispatcher.prototype.toString = CoroutineDispatcher.prototype.toString;
  SetTimeoutDispatcher.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  SetTimeoutDispatcher.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  SetTimeoutDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  SetTimeoutDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  MessageQueue.prototype.schedule_1 = MessageQueue.prototype.schedule_1;
  MessageQueue.prototype.reschedule_1 = MessageQueue.prototype.reschedule_1;
  MessageQueue.prototype._get_isEmpty__2 = ArrayQueue.prototype._get_isEmpty__2;
  MessageQueue.prototype.addLast_7 = ArrayQueue.prototype.addLast_7;
  MessageQueue.prototype.removeFirstOrNull_2 = ArrayQueue.prototype.removeFirstOrNull_2;
  WindowDispatcher.prototype.isDispatchNeeded_8 = CoroutineDispatcher.prototype.isDispatchNeeded_8;
  WindowDispatcher.prototype.interceptContinuation_9 = CoroutineDispatcher.prototype.interceptContinuation_9;
  WindowDispatcher.prototype.releaseInterceptedContinuation_9 = CoroutineDispatcher.prototype.releaseInterceptedContinuation_9;
  WindowDispatcher.prototype.plus_17 = CoroutineContext.prototype.plus_17;
  WindowDispatcher.prototype.toString = CoroutineDispatcher.prototype.toString;
  WindowDispatcher.prototype._get_key__18 = AbstractCoroutineContextElement.prototype._get_key__18;
  WindowDispatcher.prototype.get_28 = ContinuationInterceptor.prototype.get_28;
  WindowDispatcher.prototype.fold_17 = Element_0.prototype.fold_17;
  WindowDispatcher.prototype.minusKey_18 = ContinuationInterceptor.prototype.minusKey_18;
  WindowMessageQueue.prototype.removeFirstOrNull_2 = ArrayQueue.prototype.removeFirstOrNull_2;
  WindowMessageQueue.prototype.addLast_7 = ArrayQueue.prototype.addLast_7;
  WindowMessageQueue.prototype.enqueue_1 = MessageQueue.prototype.enqueue_1;
  WindowMessageQueue.prototype.process_1 = MessageQueue.prototype.process_1;
  WindowMessageQueue.prototype._get_isEmpty__2 = ArrayQueue.prototype._get_isEmpty__2;
  ScheduledMessageQueue.prototype.enqueue_1 = MessageQueue.prototype.enqueue_1;
  ScheduledMessageQueue.prototype.process_1 = MessageQueue.prototype.process_1;
  ScheduledMessageQueue.prototype._get_isEmpty__2 = ArrayQueue.prototype._get_isEmpty__2;
  ScheduledMessageQueue.prototype.addLast_7 = ArrayQueue.prototype.addLast_7;
  ScheduledMessageQueue.prototype.removeFirstOrNull_2 = ArrayQueue.prototype.removeFirstOrNull_2;
  $requestRemoteDataCOROUTINE$1.prototype._set_state__1 = CoroutineImpl_0.prototype._set_state__1;
  $requestRemoteDataCOROUTINE$1.prototype._get_state__6 = CoroutineImpl_0.prototype._get_state__6;
  $requestRemoteDataCOROUTINE$1.prototype._set_exceptionState__1 = CoroutineImpl_0.prototype._set_exceptionState__1;
  $requestRemoteDataCOROUTINE$1.prototype._get_exceptionState__1 = CoroutineImpl_0.prototype._get_exceptionState__1;
  $requestRemoteDataCOROUTINE$1.prototype._set_result__1 = CoroutineImpl_0.prototype._set_result__1;
  $requestRemoteDataCOROUTINE$1.prototype._get_result__1 = CoroutineImpl_0.prototype._get_result__1;
  $requestRemoteDataCOROUTINE$1.prototype._set_exception__1 = CoroutineImpl_0.prototype._set_exception__1;
  $requestRemoteDataCOROUTINE$1.prototype._get_exception__1 = CoroutineImpl_0.prototype._get_exception__1;
  $requestRemoteDataCOROUTINE$1.prototype._set_finallyPath__1 = CoroutineImpl_0.prototype._set_finallyPath__1;
  $requestRemoteDataCOROUTINE$1.prototype._get_finallyPath__1 = CoroutineImpl_0.prototype._get_finallyPath__1;
  $requestRemoteDataCOROUTINE$1.prototype._get_context__9 = CoroutineImpl_0.prototype._get_context__9;
  $requestRemoteDataCOROUTINE$1.prototype.intercepted_1 = CoroutineImpl_0.prototype.intercepted_1;
  $requestRemoteDataCOROUTINE$1.prototype.resumeWith_10 = CoroutineImpl_0.prototype.resumeWith_10;
  $requestRemoteDataCOROUTINE$1.prototype.create_5 = CoroutineImpl_0.prototype.create_5;
  $requestRemoteDataCOROUTINE$1.prototype.create_4 = CoroutineImpl_0.prototype.create_4;
  FirstImpl.prototype.defImpl_1 = InterfaceSample.prototype.defImpl_1;
  SecondImpl.prototype.defImpl_1 = InterfaceSample.prototype.defImpl_1;
  _no_name_provided__34.prototype._set_state__1 = CoroutineImpl_0.prototype._set_state__1;
  _no_name_provided__34.prototype._get_state__6 = CoroutineImpl_0.prototype._get_state__6;
  _no_name_provided__34.prototype._set_exceptionState__1 = CoroutineImpl_0.prototype._set_exceptionState__1;
  _no_name_provided__34.prototype._get_exceptionState__1 = CoroutineImpl_0.prototype._get_exceptionState__1;
  _no_name_provided__34.prototype._set_result__1 = CoroutineImpl_0.prototype._set_result__1;
  _no_name_provided__34.prototype._get_result__1 = CoroutineImpl_0.prototype._get_result__1;
  _no_name_provided__34.prototype._set_exception__1 = CoroutineImpl_0.prototype._set_exception__1;
  _no_name_provided__34.prototype._get_exception__1 = CoroutineImpl_0.prototype._get_exception__1;
  _no_name_provided__34.prototype._set_finallyPath__1 = CoroutineImpl_0.prototype._set_finallyPath__1;
  _no_name_provided__34.prototype._get_finallyPath__1 = CoroutineImpl_0.prototype._get_finallyPath__1;
  _no_name_provided__34.prototype._get_context__9 = CoroutineImpl_0.prototype._get_context__9;
  _no_name_provided__34.prototype.intercepted_1 = CoroutineImpl_0.prototype.intercepted_1;
  _no_name_provided__34.prototype.resumeWith_10 = CoroutineImpl_0.prototype.resumeWith_10;
  _no_name_provided__34.prototype.create_5 = CoroutineImpl_0.prototype.create_5;
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
  COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
  COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
  TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
  SEALED = new Symbol('SEALED');
  EMPTY_NEW = new Empty(false);
  EMPTY_ACTIVE = new Empty(true);
  UNDEFINED = new Symbol('UNDEFINED');
  REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
  counter = 0;
  DEBUG = false;
  var $mezlogo = _.mezlogo || (_.mezlogo = {});
  var $mezlogo$kmp14rc = $mezlogo.kmp14rc || ($mezlogo.kmp14rc = {});
  $mezlogo$kmp14rc.DataHolder = DataHolder;
  $mezlogo$kmp14rc.KmpStdTypesSample = KmpStdTypesSample;
  $mezlogo$kmp14rc.FirstImpl = FirstImpl;
  $mezlogo$kmp14rc.SecondImpl = SecondImpl;
  $mezlogo$kmp14rc.newJsAdoptedFullApiImpl = newJsAdoptedFullApiImpl;
  $mezlogo$kmp14rc.JsAdoptedFullApiImpl = JsAdoptedFullApiImpl;
  return _;
}));
