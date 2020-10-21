<html>

<head></head>

<body>
  <div>
    @foreach ($schedules as $schedule)
    <p>ユーザID:{{$schedule->uid}}</p>
    <p>タイトル:{{$schedule->title}}</p>
    <p>ヘッダー :{{$schedule->header}}</p>
    <p>人の数:{{$schedule->people}}</p>
    @foreach($schedule->schedules_tags as $st)
    <p>タグid:{{$st->tag_id}}</p>
    @foreach($tags as $tag)
    @if($st->tag_id==$tag->id)
    <p>タグ名:{{$tag->tag_name}}</p>
    @endif
    @endforeach
    @endforeach
    @foreach($schedule->schedules_places as $sp)
    <p>場所id:{{$sp->place_id}}</p>
    @foreach($places as $place)
    @if($sp->place_id==$place->id)
    <p>タグ名:{{$place->place_name}}</p>
    <p>番号:{{$place->order_number}}</p>
    <p>日付:{{$place->day}}</p>
    @endif
    @endforeach
    @endforeach
    <br>
    <br>
    @endforeach
  </div>
</body>

</html>